import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { ICreateUserResponse } from 'src/user/entities/user.responses';
import { RESPONSE_ERROR } from 'src/user/user.constants';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<ICreateUserResponse> {
    try {
      const user = await this.prisma.user.create({
        data: { ...createUserDto },
      });
      return { error: false, message: 'Usuario creado con éxito', user: user };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new Error(RESPONSE_ERROR.EXISTING_EMAIL);
      }

      throw new Error(RESPONSE_ERROR.GENERAL_ERROR);
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
