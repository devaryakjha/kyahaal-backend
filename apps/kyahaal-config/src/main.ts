import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CONFIG_PACKAGE_NAME } from './config/protos/config.pb';
import { KyahaalConfigModule } from './kyahaal-config.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KyahaalConfigModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        protoPath: join(__dirname, 'protos/config.proto'),
        package: CONFIG_PACKAGE_NAME,
        loader: {
          enums: String,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
