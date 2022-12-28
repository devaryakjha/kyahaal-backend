import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../../users/user.schema';
import { UsersService } from '../../users/users.service';
import {
  GetALlUsersResponse,
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  ValidateRequest,
  ValidateResponse,
} from '../protos/auth.pb';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Inject(UsersService)
  private readonly userService: UsersService;

  public async validate({ token }: ValidateRequest): Promise<ValidateResponse> {
    const decoded: User = await this.jwtService.verify(token);

    if (!decoded) {
      return {
        status: HttpStatus.FORBIDDEN,
        error: ['Token is invalid'],
      };
    }

    const auth: User = await this.jwtService.validateUser(decoded);

    if (!auth) {
      return {
        status: HttpStatus.CONFLICT,
        error: ['User not found'],
      };
    }

    return { status: HttpStatus.OK, error: null, user: auth };
  }

  public async login({
    email,
    password,
  }: LoginRequest): Promise<LoginResponse> {
    const auth: User = await this.userService.findOne({ email });

    if (!auth) {
      return {
        status: HttpStatus.NOT_FOUND,
        error: ['E-Mail not found'],
        accessToken: null,
      };
    }

    const isPasswordValid: boolean = this.jwtService.isPasswordValid(
      password,
      auth.password,
    );

    if (!isPasswordValid) {
      return {
        status: HttpStatus.NOT_FOUND,
        error: ['Password wrong'],
        accessToken: null,
      };
    }

    const token: string = this.jwtService.generateToken(auth);

    return {
      accessToken: token,
      status: HttpStatus.OK,
      error: null,
      user: auth,
    };
  }

  public async register({
    email,
    password,
    username,
  }: RegistrationRequest): Promise<RegistrationResponse> {
    let auth: User = await this.userService.findOne({ email });

    if (auth) {
      return {
        status: HttpStatus.CONFLICT,
        error: ['E-Mail already exists'],
        accessToken: null,
      };
    }

    auth = new User();
    auth.email = email;
    auth.password = this.jwtService.encodePassword(password);
    auth.username = username;

    const result = await this.userService.createUser(auth);

    return {
      status: HttpStatus.CREATED,
      error: null,
      user: {
        email,
        username,
        userId: result.userId,
      },
      accessToken: this.jwtService.generateToken(auth),
    } as RegistrationResponse;
  }

  public async getAll(): Promise<GetALlUsersResponse> {
    const users = await this.userService.findAll();
    return { users };
  }
}
