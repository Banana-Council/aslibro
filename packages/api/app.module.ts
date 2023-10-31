import {
  EVENTSTORE_KEYSTORE_CONNECTION,
  EventStoreModule,
} from '@aulasoftwarelibre/nestjs-eventstore'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ConsoleModule } from 'nestjs-console'

import LoggerMiddleware from '~/middleware/logger'

import BookModule from './book/infrastructure/module'

@Module({
  controllers: [],
  imports: [
    BookModule,
    ConfigModule.forRoot({
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`,
        `.env.${process.env.NODE_ENV}`,
        '.env.local',
        '.env',
      ],
      isGlobal: true,
    }),
    ConsoleModule,
    EventStoreModule.forRoot({
      connection: process.env.EVENTSTORE_URI || '',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || '', {}),
    MongooseModule.forRoot(process.env.KEYSTORE_URI || '', {
      connectionName: EVENTSTORE_KEYSTORE_CONNECTION,
    }),
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
