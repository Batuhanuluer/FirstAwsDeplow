import { Controller, Get, Param ,Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/:token')
  returnWorld(@Param() Param){
    return Param.token;
  }

}
