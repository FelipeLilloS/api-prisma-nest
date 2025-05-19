import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class PostService {

    constructor(private prisma: PrismaService) {}

    createPost(title: string, content: string, userId: number){
        const post = this.prisma.post.create({
            data: {
                title,
                content,
                authorId: userId
            },
        })
        return post;
    }

    findAll() {
        return this.prisma.post.findMany();
    }

    findOne(id: number) {
        return this.prisma.post.findUnique({
            where: { id }
        });
    }

    updatePost(id: number, title: string, content: string) {
        return this.prisma.post.update({
            where: { id },
            data: {
                title,
                content
            }
        });
    }

    deletePost(id: number) {
        return this.prisma.post.delete({
            where: { id }
        });
    }

}
