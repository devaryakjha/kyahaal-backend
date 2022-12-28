import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AuthenticationClient,
  AUTHENTICATION_SERVICE_NAME,
  LoginRequest,
  RegistrationRequest,
} from './protos/auth.pb';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private svc: AuthenticationClient;

  @Inject(AUTHENTICATION_SERVICE_NAME)
  private readonly client: ClientGrpc;

  onModuleInit() {
    this.svc = this.client.getService(AUTHENTICATION_SERVICE_NAME);
  }

  @Post('register')
  private async register(@Body() body: RegistrationRequest) {
    return this.svc.register(body);
  }

  @Get('validate/:token')
  private async validate(@Param('token') token: string) {
    return this.svc.validate({ token });
  }

  @Post('login')
  private async login(@Body() body: LoginRequest) {
    return this.svc.login(body);
  }

  @Get('all')
  private async getAll() {
    return this.svc.getAll({});
  }
}
