import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    createUser(email: string, name: string){
        const user = this.prisma.user.create({
            data: {
              email,
                name
            },
        })
        return user;
    }

    createUserWithPost(email: string, name: string, title: string, content: string){
        const user = this.prisma.user.create({
            data: {
                email,
                name,
                posts: {
                    create: {
                        title,
                        content
                    }
                }
            },
        })
        return user;
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id }
        });
    }

    updateUser(id: number, email: string, name: string) {
        return this.prisma.user.update({
            where: { id },
            data: {
                email,
                name
            }
        });
    }

    deleteUser(id: number) {
        return this.prisma.user.delete({
            where: { id }
        });
    }

}