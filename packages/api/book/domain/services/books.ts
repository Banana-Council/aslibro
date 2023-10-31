import Book from '../models/book'

type Books = Readonly<{
  save(book: Book): Book
}>

export default Books
