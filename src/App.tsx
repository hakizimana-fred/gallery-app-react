import { Navbar } from './components/Navbar'
import { LoginPage } from './pages/Login'
import { SignupPage } from './pages/RegisterPage'
import { Routes, Route} from 'react-router-dom'
import { UserAuthProvider } from './context/UserContext'
import { GalleryScreen } from './pages/Gallery'
import { CreateMoment } from './pages/MomentformPage'
import { UserGalleryProvider } from './context/UserGallery'
import { ForgotPassword } from './pages/RequestResetPassword'
import { ResetPassword } from './pages/ResetPassword'
import {  PrivateRoute, PublicRoute } from './Routes'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <UserAuthProvider>
       <UserGalleryProvider>
      <Navbar />
      <Routes> 
        <Route  element={<PrivateRoute  />}>
            <Route  path="/create" element={<CreateMoment />} />
            <Route  path="/gallery" element={<GalleryScreen />} />
        </Route>

         <Route  element={<PublicRoute  />}>
            <Route  path="/" element={<LoginPage />} />
            <Route  path="/signup" element={<SignupPage />} />
        </Route>

            <Route  path="/forgot-password" element={<ForgotPassword />} />
            <Route  path="/change-password/:token" element={<ResetPassword/>} />
       

      </Routes>
      </UserGalleryProvider>
      </UserAuthProvider>
    </React.Fragment>
  )
}

export default App
