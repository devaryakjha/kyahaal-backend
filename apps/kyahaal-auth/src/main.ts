import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from './auth/protos/auth.pb';
import { KyahaalAuthModule } from './kyahaal-auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KyahaalAuthModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50050',
        protoPath: join(__dirname, 'protos/auth.proto'),
        package: AUTH_PACKAGE_NAME,
        loader: {
          enums: String,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
