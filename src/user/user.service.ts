import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { AuthDto } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findUserByDto(dto: AuthDto): Promise<UserDocument> {
    return await this.userModel.findOne({ username: dto.username }).exec();
  }

  async saveUser(dto: AuthDto): Promise<UserDocument> {
    const createUser = new this.userModel(dto);
    return createUser.save();
  }

  async updateUserRt(id: string, rt: string): Promise<User> {
    const findUser = await this.findUserById(id);
    findUser.hashedRt = rt;
    return await this.userModel.findByIdAndUpdate(id, findUser).exec();
  }
}
