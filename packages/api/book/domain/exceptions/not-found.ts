import { Exception } from '~/shared/domain'

const __name__ = 'NotFoundBook'

const code = 'not_found'

type NotFoundBook = Exception<typeof __name__, typeof code>

const NotFoundBook = {
  withId: (id: string): NotFoundBook => ({
    ...Exception.with({
      __name__,
      code,
      message: `Book with id '${id}' cannot be found`,
    }),
  }),
} as const

export default NotFoundBook
