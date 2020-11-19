import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService , private authService: AuthService) {
  }

   //@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.body)
    return this.authService.login(req.body);
  }
  
  @Post()
    helloPost(@Body() Body: any): any{
      return Body;
    }


  
    /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

 /* @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }*/
}
