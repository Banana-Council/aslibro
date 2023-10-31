import NameType from '~/shared/name-type'

const __name__ = 'CreateBook'

type CreateBookType = NameType<
  Readonly<{
    description: string
    id: string
    title: string
  }>,
  typeof __name__
>

class CreateBook implements CreateBookType {
  readonly __name__ = __name__

  private constructor(
    readonly id: CreateBookType['id'],
    readonly description: CreateBookType['description'],
    readonly title: CreateBookType['title'],
  ) {}

  static with({
    description,
    id,
    title,
  }: Omit<CreateBookType, '__name__'>): CreateBook {
    return new this(id, description, title)
  }
}

export default CreateBook
