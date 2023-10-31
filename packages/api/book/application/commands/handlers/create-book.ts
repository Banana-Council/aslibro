import { InjectAggregateRepository } from '@aulasoftwarelibre/nestjs-eventstore'
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'

import InvalidBookTitle from '~/book/domain/exceptions/invalid-title'
import Book from '~/book/domain/models/book'
import BookDescription from '~/book/domain/models/description'
import BookId from '~/book/domain/models/id'
import BookTitle from '~/book/domain/models/title'
import Books from '~/book/domain/services/books'
import { InvalidUuid } from '~/shared/domain'
import Either from '~/shared/either'

import CreateBook from '../create-book'

@CommandHandler(CreateBook)
class CreateBookHandler implements ICommandHandler {
  constructor(
    @InjectAggregateRepository(Book)
    private readonly books: Books,
  ) {}

  async execute(
    command: CreateBook,
  ): Promise<Either<InvalidUuid | InvalidBookTitle, Book>> {
    const id = BookId.fromString(command.id)
    const isInvalidId = Either.isLeft(id)

    const description = BookDescription.fromString(command.description)

    const title = BookTitle.fromString(command.title)
    const isInvalidTitle = Either.isLeft(title)

    if (isInvalidId) return Either.left(id.value)

    if (isInvalidTitle) return Either.left(title.value)

    const book = Book.create({ description, id: id.value, title: title.value })

    this.books.save(book)

    return Either.right(book)
  }
}

export default CreateBookHandler
