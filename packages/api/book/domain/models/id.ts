import { InvalidUuid, Uuid } from '~/shared/domain'
import Either from '~/shared/either'
import NameType from '~/shared/name-type'

const __name__ = 'BookId'

type BookId = NameType<Uuid, typeof __name__>

const BookId = {
  fromString: (value: BookId['value']): Either<InvalidUuid, BookId> => {
    const uuid = Uuid.fromString(value)
    const isInvalidUuid = Either.isLeft(uuid)

    if (isInvalidUuid) return uuid

    return Either.right({ __name__, value })
  },
} as const

export default BookId
