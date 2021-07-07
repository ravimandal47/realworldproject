import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('monogodb://localhost')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
