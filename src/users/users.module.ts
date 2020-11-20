import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController} from './users.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './models/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema: userSchema }]) ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {

}
