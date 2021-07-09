import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ForgotPasswordDto, ResetPasswordDto } from './helpers/resetPasswordDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }

    @Post('forgot-password')
    async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
      return this.authService.forgotPassword(forgotPasswordDto.email);
    }
  
    @Get('reset-password/:token')
    async verifyToken(@Param('token') token: string) {
      return this.authService.verifyResetPasswordToken(token);
    }
    
    @Post('reset-password')
    async resetPassword(
      @Body() passwordDto: ResetPasswordDto,
      @Request() req
    ) {
      const userid = req.user.id
      return this.authService.resetPassword(userid, passwordDto.newPassword);
    }

}
