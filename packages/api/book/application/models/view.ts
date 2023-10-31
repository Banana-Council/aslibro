import NameType from '~/shared/name-type'

const __name__ = 'BookView'

type BookView = NameType<
  Readonly<{
    description: string
    id: string
    title: string
  }>,
  typeof __name__
>

const BookView = {
  with: (props: Omit<BookView, '__name__'>): BookView => ({
    ...props,
    __name__,
  }),
} as const

export default BookView
