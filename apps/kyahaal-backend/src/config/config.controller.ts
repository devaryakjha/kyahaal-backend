import { Body, Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ConfigClient, CONFIG_SERVICE_NAME, Request } from './protos/config.pb';

@Controller('config')
export class ConfigController implements OnModuleInit {
  private svc: ConfigClient;
  @Inject(CONFIG_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<ConfigClient>(CONFIG_SERVICE_NAME);
  }

  @Get('/app')
  private async getMobileAppConfig(@Body() body: Request) {
    const response = await firstValueFrom(this.svc.getMobileAppConfig(body));
    return response;
  }
}
