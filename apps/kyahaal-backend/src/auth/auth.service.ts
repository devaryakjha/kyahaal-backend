import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AUTHENTICATION_SERVICE_NAME,
  AuthenticationClient,
  ValidateResponse,
} from './protos/auth.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
@Injectable()
export class AuthService implements OnModuleInit {
  private svc: AuthenticationClient;

  @Inject(AUTHENTICATION_SERVICE_NAME)
  private readonly client: ClientGrpc;

  onModuleInit() {
    this.svc = this.client.getService(AUTHENTICATION_SERVICE_NAME);
  }

  public async validate(token: string): Promise<ValidateResponse> {
    return firstValueFrom(this.svc.validate({ token }));
  }
}
