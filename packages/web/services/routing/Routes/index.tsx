import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants'

const Home = lazy(() => import('~/pages/home'))

const AppRoutes = () => (
  <Suspense fallback={<>Loading...</>}>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path="*" element={<Navigate to={ROUTES.HOME} />}></Route>
    </Routes>
  </Suspense>
)

export default AppRoutes
