import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { KyahaalAuthController } from './kyahaal-auth.controller';
import { KyahaalAuthService } from './kyahaal-auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/kyahaal_test7'),
    AuthModule,
    UsersModule,
  ],
  controllers: [KyahaalAuthController],
  providers: [KyahaalAuthService],
})
export class KyahaalAuthModule {}
