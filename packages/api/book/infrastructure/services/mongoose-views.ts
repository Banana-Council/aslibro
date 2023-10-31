import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import BookView from '~/book/application/models/view'
import BookViews from '~/book/application/services/views'

import MongooseBookView from '../models/mongoose/view'

class MongooseBookViews implements BookViews {
  constructor(
    @InjectModel(MongooseBookView.name)
    private readonly views: Model<MongooseBookView>,
  ) {}

  async add(view: BookView): Promise<void> {
    await this.views.create(MongooseBookView.fromBookView(view))
  }
}

export default MongooseBookViews
