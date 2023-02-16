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

function App() {
  return (
    <UserAuthProvider>
    <UserGalleryProvider>
     <Navbar /> 
     <Routes>
      <Route path = '/' element={<LoginPage />} />
      <Route path = '/signup' element={<SignupPage />} />
      <Route path = '/gallery' element={<GalleryScreen />} />
      <Route path = '/create' element={<CreateMoment />} />
      <Route path = '/forgot-password' element={<ForgotPassword />} />
      <Route path = '/change-password/:token' element={<ResetPassword />} />
     </Routes>
  </UserGalleryProvider>
    </UserAuthProvider>
  )
}

export default App
