import { Event } from '@aulasoftwarelibre/nestjs-eventstore'

import NameType from '~/shared/name-type'

const __name__ = 'BookCreated'

type BookCreatedType = NameType<
  Readonly<{
    description: string
    id: string
    title: string
  }>,
  typeof __name__
>

class BookCreated extends Event implements BookCreatedType {
  readonly __name__ = __name__

  private constructor(
    readonly id: BookCreatedType['id'],
    readonly description: BookCreatedType['description'],
    readonly title: BookCreatedType['title'],
  ) {
    super(id, {
      _id: id,
      description,
      title,
    })
  }

  static with({
    description,
    id,
    title,
  }: Omit<BookCreatedType, '__name__'>): BookCreated {
    return new this(id, description, title)
  }
}

export default BookCreated
