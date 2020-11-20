import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() mail: { email: string; password: string }): any {
    const { email, password } = mail;
    console.log(email, password);
    return this.authService.login(mail);
  }

   @Post('signin')
  signIn(@Body() Body: any): any {
    console.log(Body);
    return Body;
  }


  /*@Get('token')
  generarToken(login) {
      
      return this.authService.generarToken()
  }*/

  /*@Get('token')
  generarToken(login) {
      
      return this.authService.generarToken()
  }*/
}
