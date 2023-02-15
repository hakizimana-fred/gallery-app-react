import { useContext, useState } from 'react'
import { AuthContext, ICredentials } from '../context/UserContext'

export const SignupPage = () => {

    const [credentials, setCredentails] = useState<ICredentials>({email: '', password: ''})
    const { signup } = useContext(AuthContext)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setCredentails(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const data = await signup(credentials)
            console.log(data)
        }catch(e) {
            console.log(e)
        }
    }
    return(
        <form
    onSubmit={onSubmit}
     className="flex flex-col justify-center max-w-lg m-auto"
   >
     <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
       Signup
     </h2>
     <div>
     <input
       required
        type="text"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter email" 
       onChange={onChange}
       value={credentials.email}
     />
     </div>

     <div>
     <input
       required
        type="text"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter password" 
       onChange={onChange}
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
     <a href="#" className="text-indigo-800">Already have an account? Login </a>
     </div>
   </form>
    )
}