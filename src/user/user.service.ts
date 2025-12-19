import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  @Inject(PrismaService)
  private prismaService: PrismaService;

  create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data,
      select: {
        id: true,
      }
    })
  }
}
