import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
