import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {}
    
    @Post('create')
    async createPost(@Body() body: { title: string; content: string; userId: number }) {
        const post = await this.postService.createPost(body.title, body.content, body.userId);
        return {
            ...post,
            message: 'Post created'
        };
    }

    @Get()
    findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.findOne(Number(id));
    }

    @Put('update/:id')
    async updatePost(@Param('id') id: string, @Body() body: { title: string; content: string }) {
        const post = await this.postService.updatePost(Number(id), body.title, body.content);
        return {
            ...post,
            message: 'Post updated'
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.deletePost(Number(id));
    }

}