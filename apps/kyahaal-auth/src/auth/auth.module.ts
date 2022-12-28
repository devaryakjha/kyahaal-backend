import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { JwtService } from './service/jwt.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '../users/users.service';
import { User, UserSchema } from '../users/user.schema';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStrategy, UsersService],
})
export class AuthModule {}
