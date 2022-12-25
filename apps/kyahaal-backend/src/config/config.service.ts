import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ConfigClient, CONFIG_SERVICE_NAME } from './protos/config.pb';

@Injectable()
export class ConfigService implements OnModuleInit {
  private svc: ConfigClient;

  @Inject(CONFIG_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<ConfigClient>(CONFIG_SERVICE_NAME);
  }
}
