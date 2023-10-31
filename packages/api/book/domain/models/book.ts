import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore'

import BookCreated from '../events/book-created'
import BookDescription from './description'
import BookId from './id'
import BookTitle from './title'

class Book extends AggregateRoot {
  private _id!: BookId
  private _description!: BookDescription
  private _title!: BookTitle

  aggregateId(): string {
    return this._id.value
  }

  get id(): BookId {
    return this._id
  }

  get title(): BookTitle {
    return this._title
  }

  get description(): BookDescription {
    return this._description
  }

  static create({
    description,
    id,
    title,
  }: {
    description: BookDescription
    id: BookId
    title: BookTitle
  }): Book {
    const book = new this()

    book.apply(
      BookCreated.with({
        description: description.value,
        id: id.value,
        title: title.value,
      }),
    )

    return book
  }

  private onBookCreated(event: BookCreated): void {
    this._id = BookId.fromString(event.id).value as BookId
    this._title = BookTitle.fromString(event.title).value as BookTitle
    this._description = BookDescription.fromString(event.description)
  }
}

export default Book
