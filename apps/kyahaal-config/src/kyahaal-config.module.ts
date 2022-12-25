import { Module } from '@nestjs/common';
import { KyahaalConfigController } from './kyahaal-config.controller';
import { KyahaalConfigService } from './kyahaal-config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [KyahaalConfigController],
  providers: [KyahaalConfigService],
})
export class KyahaalConfigModule {}
