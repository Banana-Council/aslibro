import { Prop, Schema } from '@nestjs/mongoose'

import BookView from '~/book/application/models/view'

@Schema({ versionKey: false })
class MongooseBookView implements Omit<BookView, '__name__' | 'id'> {
  @Prop()
  readonly _id: string

  @Prop()
  readonly description: string

  @Prop()
  readonly title: string

  constructor(
    id: MongooseBookView['_id'],
    title: MongooseBookView['title'],
    description: MongooseBookView['description'],
  ) {
    this._id = id
    this.description = description
    this.title = title
  }

  static fromBookView({ description, id, title }: BookView): MongooseBookView {
    return new this(id, title, description)
  }
}

export default MongooseBookView
