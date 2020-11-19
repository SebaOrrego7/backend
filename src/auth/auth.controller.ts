import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    getHello(){
        return "helloWorld"
    }
    @Post('login')
    login(@Body() Body:any): any{
        console.log(Body)
        return Body;
    }
    @Post('signin')
    signIn(@Body() Body:any): any{
        console.log(Body)
        return Body;
    }
    
}
