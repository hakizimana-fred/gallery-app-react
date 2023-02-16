import {   Navigate, Outlet } from 'react-router-dom';


export function useAuth() {
  return Boolean(localStorage.getItem('access-token'))
  
}


export function PrivateRoute({ children }: any) {
  const auth = useAuth()
  return auth ? <Outlet  /> : <Navigate to="/" />
}


export function PublicRoute({ children }: any) {
  const auth = useAuth()
  return auth ? <Navigate to="/gallery" /> : <Outlet />
  
}