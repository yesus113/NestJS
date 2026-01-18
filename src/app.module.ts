import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
//import { TweetController } from './tweet/tweet.controller';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, TweetModule, AuthModule], // All the time import the modules to be able to use it
  controllers: [AppController], //As well the controllers
  providers: [AppService], //And the providers
})
export class AppModule {}
