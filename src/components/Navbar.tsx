export const Navbar = () => {
    return (
        <nav className="relative flex-wrap flex bg-indigo-600 px-2 py-4">
           <div className="container mx-auto flex justify-between">
              <div className="logo text-3xl text-white">Moments</div> 
              <ul className="flex">
                <li className="py-2 px-3 nav-item text-white">Moments</li>
                <li className="py-2 px-3 nav-item text-white">Login</li>
              </ul>
            </div> 
        </nav>
    )
}