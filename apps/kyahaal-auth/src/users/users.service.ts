import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(
    user: Omit<User, 'userId'>,
  ): Promise<UserDocument | undefined> {
    return this.userModel.create({ ...user });
  }

  async findOne(payload: Partial<User>): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({ ...payload });
    return user;
  }

  async findAll() {
    return this.userModel.find();
  }
}
