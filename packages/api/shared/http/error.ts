import { ApiProperty } from '@nestjs/swagger'

import { Exception } from '~/shared/domain'

type Error = Readonly<{
  code: number | string
  message: string
  name: string
}>

class HttpError {
  @ApiProperty()
  readonly error: Error

  private constructor(error: Error) {
    this.error = error
  }

  static fromException(exception: Exception): HttpError {
    return new this({
      code: exception.code,
      message: exception.message,
      name: exception.__name__,
    })
  }
}

export default HttpError
