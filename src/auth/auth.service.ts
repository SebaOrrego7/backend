import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}


    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findUserByEmail(email);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

    
    async login(user: {email : string , password : string}) {
        const payload = { email: user.email};
        return {
          access_token: this.generarToken(payload),
        };
      }
    
     private generarToken(payload : {email : string}){
        const token = this.jwtService.sign(payload)
        return token
    }
}

// 