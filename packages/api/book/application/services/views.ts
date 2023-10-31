import BookView from '../models/view'

type BookViews = Readonly<{
  add: (view: BookView) => Promise<void>
}>

const BookViews = 'BookViews'

export default BookViews
