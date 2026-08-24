import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ShopeeCookiesService } from './shopee-cookies.service';

@Controller('shopee-cookies')
@UseGuards(AuthGuard('jwt'))
export class ShopeeCookiesController {
  constructor(private readonly cookiesService: ShopeeCookiesService) {}

  @Get()
  async getAllCookies() {
    return this.cookiesService.findAll();
  }

  @Get('status')
  async getStatus() {
    return this.cookiesService.getStatus();
  }

  @Post()
  async saveCookies(
    @Body()
    body: {
      cookies: string;
      label?: string;
      notes?: string;
    },
  ) {
    if (!body.cookies) {
      throw new HttpException('Cookies string is required', HttpStatus.BAD_REQUEST);
    }
    return this.cookiesService.saveCookies(body.cookies, body.label, body.notes);
  }

  @Put(':id')
  async updateCookies(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      cookies?: string;
      label?: string;
      notes?: string;
      isActive?: boolean;
    },
  ) {
    return this.cookiesService.updateCookies(id, body);
  }

  @Delete(':id')
  async deleteCookies(@Param('id', ParseIntPipe) id: number) {
    return this.cookiesService.deleteCookies(id);
  }
}
