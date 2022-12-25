import { Controller, Get } from '@nestjs/common';
import { KyahaalConfigService } from './kyahaal-config.service';

@Controller()
export class KyahaalConfigController {
  constructor(private readonly kyahaalConfigService: KyahaalConfigService) {}

  @Get()
  getHello(): string {
    return this.kyahaalConfigService.getHello();
  }
}
