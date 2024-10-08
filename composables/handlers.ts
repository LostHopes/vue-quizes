import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function handleRegister() {
}

export async function handleLogin() {
    const user = await prisma.user.findFirst({
    });
}