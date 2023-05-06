import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param,  Patch, Post, Req, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { HttpService } from '@nestjs/axios';
import { CheckAuthGuard } from './guards/check-auth.guard';
import { UseridInterceptor } from './interceptors/userid.interceptor';
import { AddNewPostDto } from './dto/add-new-post.dto';
import { ApplicationServiceURL } from './app.config';
import { UpdateOldPostDto } from './dto/update-old-post.dto';
import { RequestWithTokenPayload } from '@project/shared/app-types';
import { AddNewCommentDto } from './dto/add-new-comment.dto';

@Controller('blog')
@UseFilters(AxiosExceptionFilter)
export class BlogController {

  constructor(
    private readonly httpService: HttpService,
  ) {}

  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UseridInterceptor)
  @Post('/')
  public async createPost(@Body() dto: AddNewPostDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Blog}/`, dto);
    return data;
  }

  @Get('/:id')
  public async indexPost( @Param('id') id: string) {
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);
    return data;
  }

  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UseridInterceptor)
  @Patch('/:id')
  public async updatePost(@Param('id') id: string, @Body() dto: UpdateOldPostDto){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);

    if (dto.userId === data.userId){

      const{data} = await this.httpService.axiosRef.patch(`${ApplicationServiceURL.Blog}/${id}`, dto);
      return data;
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(CheckAuthGuard)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deletePost(@Param('id') id:string, @Req() {user: payload}: RequestWithTokenPayload){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Blog}/${id}`);
    if (payload.sub === data.userId){
      await this.httpService.axiosRef.delete(`${ApplicationServiceURL.Blog}/${id}`);
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(CheckAuthGuard)
  @Post('comment')
  public async createComment(@Req() {user: payload}: RequestWithTokenPayload, @Body() dto: AddNewCommentDto){
    const newComment = {
      message: dto.message,
      userId: payload.sub,
      postId: dto.postId
    }
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Comments}`, newComment);

    return data;
  }

  @Get('comment/:id')
  public async getComment (@Param('id') id: number){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Comments}/${id}`)
    return data;
  }

  @UseGuards(CheckAuthGuard)
  @Delete('comment/:id')
  public async deleteComment (@Param('id') id: number,@Req() {user: payload}: RequestWithTokenPayload ){
    const {data} = await this.httpService.axiosRef.get(`${ApplicationServiceURL.Comments}/${id}`)
    console.log (data.userId, payload.sub, `${ApplicationServiceURL.Comments}/${id}`)
    if (data.userId === payload.sub){
    await this.httpService.axiosRef.delete(`${ApplicationServiceURL.Comments}/${id}`)
  } else { throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)}
}
}
