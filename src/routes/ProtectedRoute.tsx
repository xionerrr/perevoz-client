import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { MainLayout } from 'layouts/Main'
import { NotFound } from 'pages'
import { signIn } from 'store/auth'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  if (token && isAuth) return <Outlet />

  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  )
}
