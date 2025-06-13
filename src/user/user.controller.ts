import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RESPONSE_ERROR } from 'src/user/user.constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : '',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.userService.findOne(+id);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : '',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.userService.update(+id, updateUserDto);
    } catch {
      throw new HttpException(
        RESPONSE_ERROR.NO_EXISTING_RECORD,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.userService.remove(+id);
    } catch {
      throw new HttpException(
        RESPONSE_ERROR.GENERAL_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
