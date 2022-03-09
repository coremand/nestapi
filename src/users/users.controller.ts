import { Body, Controller, Post, Get, Patch, Param, Query, 
        Delete, NotFoundException, UseInterceptors } from '@nestjs/common';
//For validation
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from './dtos/update-user.dto';
//To save user to database we need to bind our UserService
import { UsersService } from "./users.service";
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
export class UsersController {
    //Binding UsersService to controller
    constructor(private usersService: UsersService){}
    @Post("/signup")
    //Body decorator tells next to extract information from the incoming body
    //Body content should be of type CreateUserDto
    createUser(@Body() body: CreateUserDto){
        this.usersService.create(body.email, body.password)
    }

    @UseInterceptors(SerializeInterceptor)
    @Get('/:id')
    async findUser(@Param('id') id: string) {
        const user = await this.usersService.findOne(parseInt(id));
        if(!user) {
            throw new NotFoundException("User not found")
        }
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }

    @Delete()
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body);
    }
}

