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

  // Adicione um tipo para o PrismaClient para que o TypeScript possa reconhecer as propriedades geradas
  get user() {
    return this.prisma.user;
  }
}
