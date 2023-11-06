import NameType from '~/shared/name-type'

const __name__ = 'GetBook'

type GetBookType = NameType<Readonly<{ id: string }>, typeof __name__>

class GetBook implements GetBookType {
  readonly __name__ = __name__

  private constructor(readonly id: GetBookType['id']) {}

  static with({ id }: Omit<GetBookType, '__name__'>): GetBook {
    return new this(id)
  }
}

export default GetBook
