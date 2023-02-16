import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext, ICredentials } from '../context/UserContext'

export const SignupPage = () => {

    const [credentials, setCredentails] = useState<ICredentials>({email: '', password: ''})
    const { signup } = useContext(AuthContext)
     const [error, setError] = useState<string>('')
     const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setCredentails(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await signup(credentials)
            if (data) return navigate('/gallery')
        }catch(e: any) {
            setError(e.response.data.error)
        }
    }
    return(
        <form
    onSubmit={onSubmit}
     className="flex flex-col justify-center max-w-lg m-auto"
   >
     {error && (

     <div role="alert">
  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
  </div>
  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>{error}</p>
  </div>
</div>
    )}
     <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
       Signup
     </h2>
     <div>
     <input
       required
        type="email"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter email" 
       onChange={onChange}
       value={credentials.email}
       name="email"
     />
     </div>

     <div>
     <input
       required
        type="password"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter password" 
       onChange={onChange}
       name="password"
       value={credentials.password}
     />
     </div>
    
     <button
       type="submit"
       className="flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     >
        Signup
     </button>
     <div className="flex flex-row justify-between">
     <Link to="/" className="text-indigo-800">Already have an account? Login </Link>
     </div>
   </form>
    )
}