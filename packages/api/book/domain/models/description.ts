import { ValueObject } from '~/shared/domain'

const __name__ = 'BookDescription'

type BookDescription = ValueObject<typeof __name__, string>

const BookDescription = {
  fromString: (value: BookDescription['value']): BookDescription => {
    return { __name__, value }
  },
} as const

export default BookDescription
