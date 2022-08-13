import { Route, Routes } from 'react-router-dom'

import { MainLayout } from 'layouts/Main'
import { Book, Faq, Home, NotFound, Services } from 'pages'
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
    </Routes>
  )
}
