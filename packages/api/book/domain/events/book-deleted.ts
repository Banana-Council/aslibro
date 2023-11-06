import { Event } from '@aulasoftwarelibre/nestjs-eventstore'

import NameType from '~/shared/name-type'

const __name__ = 'BookDeleted'

type BookDeletedType = NameType<
  Readonly<{
    id: string
  }>,
  typeof __name__
>

class BookDeleted extends Event implements BookDeletedType {
  readonly __name__ = __name__

  private constructor(readonly id: BookDeletedType['id']) {
    super(id, {
      _id: id,
    })
  }

  static with({ id }: Omit<BookDeletedType, '__name__'>): BookDeleted {
    return new this(id)
  }
}

export default BookDeleted
