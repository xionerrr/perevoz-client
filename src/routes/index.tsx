import { Route, Routes } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { AuthLayout } from 'layouts/Auth'
import { MainLayout } from 'layouts/Main'
import { Book, Faq, Home, NotFound, Partner, Services, SignIn } from 'pages'
import { ROUTES } from 'utils/constants/routes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.notFound}
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />

      <Route
        path={ROUTES.home}
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.services}
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.faq}
        element={
          <MainLayout>
            <Faq />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.book}
        element={
          <MainLayout>
            <Book />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.partner}
        element={
          <MainLayout>
            <Partner />
          </MainLayout>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.admin} element={<AuthLayout>AdminPanel</AuthLayout>} />
      </Route>

      <Route element={<AuthRoute />}>
        <Route
          path={ROUTES.auth}
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
      </Route>
    </Routes>
  )
}
