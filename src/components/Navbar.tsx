import { Link, useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('access-token')

  const logout = () => {
    localStorage.removeItem('access-token')
    navigate('/')
  }

  const  Links = () => {
      if (token) {
        return (
          <>
          <Link to="/create"><li className="py-2 px-3 nav-item text-white">Create Moment</li></Link>
          <li className="py-2 px-3 nav-item text-white" onClick={logout} style={{cursor: 'pointer'}}>Logout</li>
          </>
        )
      }else {
        <>
          <Link to="/"><li className="py-2 px-3 nav-item text-white">Login</li></Link>
          </>
      }
  }
    return (
        <nav className="relative flex-wrap flex bg-indigo-600 px-2 py-4">
           <div className="container mx-auto flex justify-between">
              <div className="logo text-3xl text-white">Moments</div> 
              <ul className="flex">
               {Links()} 
              </ul>
            </div> 
        </nav>
    )
}