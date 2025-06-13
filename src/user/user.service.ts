import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { ICreateUserResponse } from 'src/user/entities/user.responses';
import { RESPONSE_ERROR, RESPONSE_SUCCESS } from 'src/user/user.constants';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<ICreateUserResponse> {
    try {
      const user = await this.prisma.user.create({
        data: { ...createUserDto },
      });
      return { error: false, message: RESPONSE_SUCCESS.CREATED, user: user };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new Error(RESPONSE_ERROR.EXISTING_RECORD);
      }

      throw new Error(RESPONSE_ERROR.GENERAL_ERROR);
    }
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const response = await this.prisma.user.findUnique({
      where: { id },
    });
    if (response) return response;
    throw new Error(RESPONSE_ERROR.NO_EXISTING_RECORD);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.user.delete({
      where: { id },
    });
    if (response) return RESPONSE_SUCCESS.DELETED;
  }
}
