import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { KyahaalAuthController } from './kyahaal-auth.controller';
import { KyahaalAuthService } from './kyahaal-auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    AuthModule,
    UsersModule,
  ],
  controllers: [KyahaalAuthController],
  providers: [KyahaalAuthService],
})
export class KyahaalAuthModule {}
