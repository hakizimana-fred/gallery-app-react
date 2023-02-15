import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { LoginPage } from './pages/Login'
import { SignupPage } from './pages/RegisterPage'
import { Routes, Route} from 'react-router-dom'
import { UserAuthProvider } from './context/UserContext'
import { GalleryScreen } from './pages/Gallery'
import { CreateMoment } from './pages/MomentformPage'
import { UserGalleryProvider } from './context/UserGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserAuthProvider>
    <UserGalleryProvider>
     <Navbar /> 
     <Routes>
      <Route path = '/' element={<LoginPage />} />
      <Route path = '/signup' element={<SignupPage />} />
      <Route path = '/gallery' element={<GalleryScreen />} />
      <Route path = '/create' element={<CreateMoment />} />
     </Routes>
  </UserGalleryProvider>
    </UserAuthProvider>
  )
}

export default App
