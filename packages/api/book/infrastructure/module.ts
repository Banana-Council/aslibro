import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore'
import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose'

import CreateBookHandler from '~/book/application/commands/handlers/create-book'
import BookCreatedHandler from '~/book/application/event-handlers/create-book'
import BookCreated from '~/book/domain/events/book-created'
import Book from '~/book/domain/models/book'

import BooksController from './controllers/books'
import MongooseBookView from './models/mongoose/view'
import bookProviders from './providers'

const controllers = [BooksController]

const commandHandlers = [CreateBookHandler]

const eventHandlers = [BookCreatedHandler]

@Module({
  controllers,
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Book], {
      BookCreated: (event) =>
        BookCreated.with({
          ...(event.payload as BookCreated),
        }),
    }),
    MongooseModule.forFeature([
      {
        name: MongooseBookView.name,
        schema: SchemaFactory.createForClass(MongooseBookView),
      },
    ]),
  ],
  providers: [...commandHandlers, ...eventHandlers, ...bookProviders],
})
class BookModule {}

export default BookModule
