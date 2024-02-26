import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  // Cria uma instância do Prisma Client
  prisma: PrismaClient;

  constructor() {
    // Inicializa o Prisma Client
    this.prisma = new PrismaClient();
  }

  // Método para acessar o Prisma Client
  getClient(): PrismaClient {
    return this.prisma;
  }
}

