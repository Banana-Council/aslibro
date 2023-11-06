import Either from '~/shared/either'

import NotFoundBook from '../exceptions/not-found'
import Book from '../models/book'
import BookId from '../models/id'

type Books = Readonly<{
  save(book: Book): Book
  withId(bookId: BookId): Promise<Either<NotFoundBook, Book>>
}>

export default Books
