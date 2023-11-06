import NameType from '~/shared/name-type'

const __name__ = 'DeleteBook'

type DeleteBookType = NameType<
  Readonly<{
    id: string
  }>,
  typeof __name__
>

class DeleteBook implements DeleteBookType {
  readonly __name__ = __name__

  private constructor(readonly id: DeleteBookType['id']) {}

  static with({ id }: Omit<DeleteBookType, '__name__'>): DeleteBook {
    return new this(id)
  }
}

export default DeleteBook
