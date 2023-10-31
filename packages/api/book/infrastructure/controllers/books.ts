import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

import CreateBook from '~/book/application/commands/create-book'
import CreateBookHandler from '~/book/application/commands/handlers/create-book'
import Either from '~/shared/either'
import HttpError from '~/shared/http/error'

import BookDto from '../models/http/dto'

@ApiTags('Books')
@Controller('books')
class BooksController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Creates a Book' })
  @ApiCreatedResponse({
    description: 'Book created',
    type: BookDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid input' })
  @Post()
  async createBook(
    @Body() dto: BookDto,
  ): Promise<BookDto | BadRequestException> {
    const response: Awaited<ReturnType<CreateBookHandler['execute']>> =
      await this.commandBus.execute(
        CreateBook.with({
          description: dto.description,
          id: dto.id,
          title: dto.title,
        }),
      )

    if (Either.isLeft(response))
      throw new BadRequestException(HttpError.fromException(response.value))

    return BookDto.fromBook(response.value)
  }
}

export default BooksController
