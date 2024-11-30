import {
  Controller,
  Post,
  Header,
  HttpCode,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('/users')
export class UsersController {
  // constructor(private service: UsersService) {}

  @Post('/register')
  // @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async register(@Body() body: object) {
    try {
      return { status: 'Succesfully registered', data: body };
    } catch (error) {
      throw new HttpException(
        { status: 'error', message: error.message || 'An error occurred' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Body() body: object) {
    try {
      return { status: 'Succesfully logged in!', data: body };
    } catch (error) {
      throw new HttpException(
        { status: 'error', message: error.message || 'An error occurred' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/:id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    try {
      return { status: 'Succesfully attached!', data: { id } };
    } catch (error) {
      throw new HttpException(
        { status: 'error', message: error.message || 'An error occurred' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch('/:id')
  @HttpCode(200)
  async updateUser(@Param('id') id: string, @Body('body') body: object) {
    try {
      return { status: 'User succesfully updated!', data: { id } };
    } catch (error) {
      throw new HttpException(
        { status: 'error', message: error.message || 'An error occurred' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('/:id')
  @HttpCode(200)
  async deleteUser(@Param('id') id: string) {
    try {
      return { status: 'User succesfully deleted!', data: { id } };
    } catch (error) {
      throw new HttpException(
        { status: 'error', message: error.message || 'An error occurred' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
