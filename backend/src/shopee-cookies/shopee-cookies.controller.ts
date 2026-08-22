import { AuthGuard } from '@nestjs/passport';
import { ShopeeCookiesService } from './shopee-cookies.service';

@Controller('shopee-cookies')
@UseGuards(AuthGuard('jwt'))
export class ShopeeCookiesController {
  constructor(private readonly cookiesService: ShopeeCookiesService) {}

  @Get()
  async getAllCookies() {
    return this.cookiesService.getAllCookies();
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
      expiresAt?: string;
    },
  ) {
    if (!body.cookies || !body.cookies.trim()) {
      throw new HttpException(
        'Cookies string is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.cookiesService.saveCookies(body);
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
      expiresAt?: string;
    },
  ) {
    return this.cookiesService.updateCookies(id, body);
  }

  @Delete(':id')
  async deleteCookies(@Param('id', ParseIntPipe) id: number) {
    await this.cookiesService.deleteCookies(id);
    return { message: 'Cookie deleted successfully' };
  }
}
