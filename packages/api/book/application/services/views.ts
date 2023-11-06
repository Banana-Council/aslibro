import BookView from '../models/view'

type BookViews = Readonly<{
  add: (view: BookView) => Promise<void>
  delete: (id: string) => Promise<void>
}>

const BookViews = 'BookViews'

export default BookViews
