import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('create')
    async createUser(@Body() body: { email: string; name: string }) {
        const user = await this.userService.createUser(body.email, body.name);
        return {
            ...user,
            message: 'User created'
        };
    }

    @Post('createWithPost')
    async createUserWithPost(@Body() body: { email: string, name: string, title: string, content: string}) {
        const userWithPost = await this.userService.createUserWithPost(body.email, body.name, body.title, body.content);
        return {
            ...userWithPost,
            message: 'User created with post'
        };
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(Number(id));
    }

    @Put('update/:id')
    async updateUser(@Param('id') id: string, @Body() body: { email: string; name: string }) {
        const user = await this.userService.updateUser(Number(id), body.email, body.name);
        return {
            ...user,
            message: 'User updated'
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }

}