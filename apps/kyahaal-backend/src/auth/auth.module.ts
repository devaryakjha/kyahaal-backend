import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import {
  AUTHENTICATION_SERVICE_NAME,
  AUTH_PACKAGE_NAME,
} from './protos/auth.pb';
import { AuthController } from './auth.controller';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTHENTICATION_SERVICE_NAME,
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
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
