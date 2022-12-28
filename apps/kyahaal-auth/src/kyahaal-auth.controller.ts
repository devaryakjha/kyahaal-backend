import { Controller, Get } from '@nestjs/common';
import { KyahaalAuthService } from './kyahaal-auth.service';

@Controller()
export class KyahaalAuthController {
  constructor(private readonly kyahaalAuthService: KyahaalAuthService) {}

  @Get()
  getHello(): string {
    return this.kyahaalAuthService.getHello();
  }
}
