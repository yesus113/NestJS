import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //GET METHOD
  getHello(): string {
    return this.appService.getHello();
  }

  @Post() //GET METHOD
  postHello(): string {
    return 'Post request successful!';
  }
}
