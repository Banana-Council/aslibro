import { ValueObject } from '~/shared/domain'
import Either from '~/shared/either'

import InvalidBookTitle from '../exceptions/invalid-title'

const __name__ = 'BookTitle'

type BookTitle = ValueObject<typeof __name__, string>

const BookTitle = {
  fromString: (
    value: BookTitle['value'],
  ): Either<InvalidBookTitle, BookTitle> => {
    const isBlank = !value.trim()

    if (isBlank) return Either.left(InvalidBookTitle.causeIsBlank())

    return Either.right({ __name__, value })
  },
} as const

export default BookTitle
