import { createContext } from 'react'
import axios from 'axios'


export const GalleryContext = createContext({} as GalleryContextProps)


type GalleryContextProps = {
    saveMoment: (details: IDetails) => object
}

export type IDetails = {
    title: string,
    description: string
    image: string
}

export const UserGalleryProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const saveMoment = async (details: IDetails) => {
        try {
             const { data } = await axios.post(`https://andela-capstone-api-production.up.railway.app/api/user/signup`, details)
             console.log(data)
             return data
        }catch(err) {throw err}
    }



    return(
        <GalleryContext.Provider
            value={{
                saveMoment,
                
            }} 
        >
            {children}
        </GalleryContext.Provider>
    )
}


