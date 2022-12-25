import { NestFactory } from '@nestjs/core';
import { KyahaalConfigModule } from './kyahaal-config.module';

async function bootstrap() {
  const app = await NestFactory.create(KyahaalConfigModule);
  await app.listen(3000);
}
bootstrap();
