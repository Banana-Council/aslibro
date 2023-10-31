import { ApiProperty } from '@nestjs/swagger'

import Book from '~/book/domain/models/book'

class BookDto {
  @ApiProperty()
  readonly id: string

  @ApiProperty()
  readonly title: string

  @ApiProperty()
  readonly description: string

  private constructor(
    id: BookDto['id'],
    description: BookDto['description'],
    title: BookDto['title'],
  ) {
    this.id = id
    this.description = description
    this.title = title
  }

  static fromBook({ description, id, title }: Book): BookDto {
    return new this(id.value, description.value, title.value)
  }
}

export default BookDto
