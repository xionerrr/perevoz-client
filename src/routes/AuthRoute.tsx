import { useLayoutEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { signIn } from 'store/auth'
import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

export const AuthRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  if (token && isAuth) return <Navigate to={ROUTES.admin} />

  return <Outlet />
}
