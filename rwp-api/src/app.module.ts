import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [MongooseModule.forRoot('monogodb://localhost')],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
