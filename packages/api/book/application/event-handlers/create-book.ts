import { Inject } from '@nestjs/common'
import { EventsHandler, IEventHandler } from '@nestjs/cqrs'

import BookCreated from '~/book/domain/events/book-created'

import BookView from '../models/view'
import BookViews from '../services/views'

@EventsHandler(BookCreated)
class BookCreatedHandler implements IEventHandler {
  constructor(@Inject(BookViews) private readonly views: BookViews) {}

  async handle(event: BookCreated): Promise<void> {
    await this.views.add(
      BookView.with({
        description: event.description,
        id: event.id,
        title: event.title,
      }),
    )
  }
}

export default BookCreatedHandler
