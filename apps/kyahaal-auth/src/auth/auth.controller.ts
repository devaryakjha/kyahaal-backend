import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  AUTHENTICATION_SERVICE_NAME,
  LoginRequest,
  RegistrationRequest,
  ValidateRequest,
} from './protos/auth.pb';
import { AuthService } from './service/auth.service';
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @GrpcMethod(AUTHENTICATION_SERVICE_NAME, 'Register')
  private register(payload: RegistrationRequest) {
    return this.service.register(payload);
  }

  @GrpcMethod(AUTHENTICATION_SERVICE_NAME, 'Login')
  private login(payload: LoginRequest) {
    return this.service.login(payload);
  }

  @GrpcMethod(AUTHENTICATION_SERVICE_NAME, 'GetAll')
  private getAll() {
    return this.service.getAll();
  }

  @GrpcMethod(AUTHENTICATION_SERVICE_NAME, 'Validate')
  private validate(payload: ValidateRequest) {
    return this.service.validate(payload);
  }
}
