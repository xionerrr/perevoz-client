import { Route, Routes } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { LayoutRoute } from './LayoutRoute'
import { ProtectedRoute } from './ProtectedRoute'

import useScrollToTop from 'hooks/useScrollToTop'
import {
  AutoPark,
  Book,
  Edit,
  Faq,
  Home,
  NotFound,
  Package,
  Partner,
  Services,
  SignIn,
} from 'pages'
import { ROUTES } from 'utils/constants/routes'

export const AppRoutes = () => {
  useScrollToTop()

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.admin} element={<Edit />} />
      </Route>
      <Route element={<AuthRoute />}>
        <Route path={ROUTES.auth} element={<SignIn />} />
      </Route>
      <Route element={<LayoutRoute />}>
        <Route path={ROUTES.notFound} element={<NotFound />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.services} element={<Services />} />
        <Route path={ROUTES.faq} element={<Faq />} />
        <Route path={ROUTES.book} element={<Book />} />
        <Route path={ROUTES.partner} element={<Partner />} />
        <Route path={ROUTES.package} element={<Package />} />
        <Route path={ROUTES.autopark} element={<AutoPark />} />
      </Route>
    </Routes>
  )
}
