import Exception from '~/shared/domain/models/exception'

const __name__ = 'InvalidBookTitle'

const blankCode = 'blank'

type InvalidBookTitle = Exception<typeof __name__, typeof blankCode>

const InvalidBookTitle = {
  causeIsBlank: (): InvalidBookTitle => ({
    ...Exception.with({
      __name__,
      code: blankCode,
      message: 'Book title cannot be blank',
    }),
  }),
} as const

export default InvalidBookTitle
