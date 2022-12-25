import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigController } from './config.controller';
import { protobufPackage, CONFIG_SERVICE_NAME } from './protos/config.pb';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONFIG_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: protobufPackage,
          protoPath: join(__dirname, 'protos/config.proto'),
          loader: {
            enums: String,
          },
        },
      },
    ]),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
