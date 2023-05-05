import { Body, Controller, Delete, ExecutionContext, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { HttpService } from '@nestjs/axios';
import { CheckAuthGuard } from './guards/check-auth.guard';
import { UseridInterceptor } from './interceptors/userid.interceptor';
import { AddNewPostDto } from './dto/add-new-post.dto';
import { ApplicationServiceURL } from './app.config';
import { UpdateOldPostDto } from './dto/update-old-post.dto';
import { RequestWithTokenPayload } from '@project/shared/app-types';

@Controller('blog')
@UseFilters(AxiosExceptionFilter)
export class BlogController {

  constructor(
    private readonly httpService: HttpService,
  ) {}

  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UseridInterceptor)
  @Post('/')
  public async create(@Body() dto: AddNewPostDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Blog}/`, dto);
    return data;
  }

  @Get('/:id')
  public async index( @Param('id') id: string) {
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);
    console.log(`${ApplicationServiceURL.Blog}/${id}`)
    return data;
  }

  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UseridInterceptor)
  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateOldPostDto){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);

    if (dto.userId === data.userId){

      const{data} = await this.httpService.axiosRef.patch(`${ApplicationServiceURL.Blog}/${id}`, dto);
      return data;
    }
  }

  @UseGuards(CheckAuthGuard)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id') id:string, @Req() {user: payload}: RequestWithTokenPayload){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);
    if (payload.sub === data.userId){
      await this.httpService.axiosRef.delete(`${ApplicationServiceURL.Blog}/${id}`);
    }
  }
}
