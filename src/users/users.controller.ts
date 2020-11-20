import {
  BadRequestException,
    Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { awaitCatcher } from 'await-catcher';
import { User } from './models/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // @UseGuards(AuthGuard('jwt'))
  constructor(private userService: UsersService) {}
  @Get()
  async getAllUsers() {
    const [users, error] = await awaitCatcher(this.userService.findAll());
    if (error) {
      throw new BadRequestException();
    }
    if (!users) {
      throw new BadRequestException(' Error al obtener usuarios');
    }
    return users;
  }
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    if (!id) throw new BadRequestException('debe ingresar Id');
    const [user, error] = await awaitCatcher(
      this.userService.findUserById(id),
    );

    if (error) {
        console.log(error)
      throw new BadRequestException('Ocurrio un error');
    }
    if (!user) {
      throw new BadRequestException('Error al encontrar el usuario');
    }
    return user;
  }
  @Post()
  async createUser (@Body () Body : User ){
     const{email , password} = Body
    const [user, error] = await awaitCatcher(
        this.userService.guardarUsuario(email , password),
      );
  
      if (error) {
          console.log(error)
          const message = error.message || 'Ocurrio un error'
        throw new BadRequestException(message);
      }
      if (!user) {
        throw new BadRequestException('Error al crear usuario');
      }
      return user;
  }

  @Put (':id')
  async updateUserById(@Param('id') id: string , @Body() Body : any) {
      const newData = Body
    if (!id) throw new BadRequestException('debe ingresar Id');
    const [user, error] = await awaitCatcher(
      this.userService.updateId(id , newData)
    );

    if (error) {
        console.log(error)
      throw new BadRequestException('Ocurrio un error');
    }
    if (!user) {
      throw new BadRequestException('Error al actualizar el usuario');
    }
    return user;

  }
  @Delete (':id')
  async deleteUserById(@Param('id') id: string) {
    if (!id) throw new BadRequestException('debe ingresar Id');
    const [user, error] = await awaitCatcher(
      this.userService.deleteId(id)
    );

    if (error) {
        console.log(error)
      throw new BadRequestException('Ocurrio un error');
    }
    if (!user) {
      throw new BadRequestException('Error al eliminar el usuario');
    }
    return user;

  }



}
