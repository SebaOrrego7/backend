import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './models/user.schema';


@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private userModel: Model<UserDocument> ) {
        

    }

   async findAll(){
       const users = await this.userModel.find()
        return users;
      } 

    async guardarUsuario(email : string , pass : string){
        const user = await this.userModel.create({email , password : pass})
        return user;

    }

    async findUserByEmail(email : string ){
        const user = await this.userModel.findOne({email})
        return user;
    }

    async findUserById ( id : string){
        const user = await this.userModel.findById(id)
        return user;

    }
    async updateId ( id: string , newData : any){
        const user = await this.userModel.findByIdAndUpdate(id , newData , {new : true})
        return user;

    }
    async deleteId (id : string){
        const user = await this.userModel.findByIdAndDelete(id)
        return user;
    }

}
