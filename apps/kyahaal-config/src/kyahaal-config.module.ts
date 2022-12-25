import { Module } from '@nestjs/common';
import { KyahaalConfigController } from './kyahaal-config.controller';
import { KyahaalConfigService } from './kyahaal-config.service';

@Module({
  imports: [],
  controllers: [KyahaalConfigController],
  providers: [KyahaalConfigService],
})
export class KyahaalConfigModule {}
