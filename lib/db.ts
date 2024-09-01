import { PrismaClient } from "@prisma/client";

declare global {
  // Declara a variável 'prisma' globalmente para evitar múltiplas instâncias.
  var prisma: PrismaClient | undefined;
}

// Reusa a instância existente em 'globalThis.prisma' ou cria uma nova.
export const db = globalThis.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Adiciona logging para depuração.
});

// Em ambiente de desenvolvimento, salva a instância no 'globalThis'.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
