import { createContext } from 'react'
import axios from 'axios'

export const AuthContext = createContext({} as UserContextProps)

type UserContextProps = {
    signup: (credentials: ICredentials) => object
    login: (credentials: ICredentials) => object
}

export type ICredentials = {
    email: string,
    password: string
}

const BASE_URL = import.meta.env.VITE_BASE_API_URL

export const UserAuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const signup = async (credentials: ICredentials) => {
        try {
             const { data } = await axios.post(`${BASE_URL}/api/v1/user/signup`, credentials)
             localStorage.setItem('access-token', data.data.token)
             return data
        }catch(err) {throw err}
    }

    const login = async (credentials: ICredentials) => {
        try {
             const { data } = await axios.post(`${BASE_URL}/api/v1/user/login`, credentials)
             localStorage.setItem('access-token', data.data.token)
             return data
        }catch(err) {throw err}
    }


    return(
        <AuthContext.Provider
            value={{
                signup,
                login
            }} 
        >
            {children}
        </AuthContext.Provider>
    )
}


