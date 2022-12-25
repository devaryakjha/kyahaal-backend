import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ConfigService } from './config.service';
import { CONFIG_SERVICE_NAME, Response } from './protos/config.pb';

@Controller()
export class ConfigController {
  @Inject(ConfigService)
  private readonly service: ConfigService;

  @GrpcMethod(CONFIG_SERVICE_NAME, 'GetMobileAppConfig')
  private async getAppConfig(): Promise<Response> {
    return this.service.getAppConfig();
  }
}
