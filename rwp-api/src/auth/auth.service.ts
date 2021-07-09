import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
// import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import {
  ForgotPasswordResponse,
  VerifyResetToken,
} from './helpers/forgotPasswordResponse';
import { User } from '../user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async findUser(userId: string) {
    const user = await this.userService.findUserByUserId(userId);
    return user;
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    if (await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      id: user.id,
      type: user.userType,
      enabled: user.enabled,
      tenant: user.tenant,
    };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1d',
      }),
      enabled: user.enabled,
      role: user.userType,
    };
  }

  async changePassword(id: string, newPassword: string) {
    this.userService.resetPassword(id, newPassword);
  }

  async forgotPassword(email: string): Promise<ForgotPasswordResponse> {
    const user = await this.userService.findUserByEmail(email);
    if (user) {
      //create token
      const passwordResetToken = this.jwtService.sign(
        { id: user.id },
        {
          expiresIn: '1d',
          secret: user.password,
        },
      );

      return {
        success: true,
        resetUrl: `${process.env.ORIGIN}/auth/reset-password`,
        resetToken: passwordResetToken,
      };
    }
    return { success: false };
  }
  async verifyResetPasswordToken(token: string): Promise<VerifyResetToken> {
    try {
      const decodedJWT = await this.jwtService.decode(token, {
        complete: true,
      });
      const id: string = decodedJWT['payload'].id;
      const user = await this.userService.findUserByUserId(id);
      if (!user) {
        throw new NotFoundException();
      }
      if (user) {
        this.jwtService.verify(token, {
          ignoreExpiration: false,
          secret: user.password,
        });
        return {
          verified: true,
        };
      }
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async resetPassword(id: string, password: string): Promise<any> {
    try {
      return this.userService.resetPassword(id, password);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
