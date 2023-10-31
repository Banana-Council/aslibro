import BookViews from '~/book/application/services/views'

import MongooseBookViews from './services/mongoose-views'

const bookProviders = [
  {
    provide: BookViews,
    useClass: MongooseBookViews,
  },
]

export default bookProviders
