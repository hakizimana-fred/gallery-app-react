import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ResetPassword = () => {

    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')
    const { token } = useParams()
    const navigate =  useNavigate()

    useEffect(() => {
    }, [token])


    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
         if (password !== confirmPassword)  return setError("Passwords do  not match!")

          const changes = {token, password }
          const { data } = await axios.post(`http://localhost:5000/api/v1/user/change-password`, changes )
            if (data) {
              alert(data.mesage)
              return navigate('/')
            }
        }catch(e: any) {
            setError(e.response.data.error)
        }
    }

    return(
    <>
   
        <form
     className="flex flex-col py-3 justify-center max-w-lg m-auto"
     onSubmit={onSubmit}
   >
    {success &&(
   <div role="alert">
  <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
  </div>
  <div className="border border-t-0 border-red-400 rounded-b bg-green-100 px-4 py-3 text-red-700">
    <p>{success}</p>
  </div>
</div>
  )}
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
       Reset Password
     </h2>
     <div>
     <input
       required
        type="password"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter email" 
       name="password"
       onChange={handlePasswordChange}
       value={password}
     />

     <input
       required
        type="password"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Confirm password" 
       name="password"
       onChange={handleConfirmPasswordChange}
       value={confirmPassword}
     />

     </div>

    
     <button
       type="submit"
       className="flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     >
        send 
     </button>
   </form>
   </>
    )
}