import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  sign(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signup(dto);
  }
}
