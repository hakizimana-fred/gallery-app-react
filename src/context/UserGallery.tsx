import { createContext } from 'react'
import axios from 'axios'


export const GalleryContext = createContext({} as GalleryContextProps)


type GalleryContextProps = {
    saveMoment: (details: IDetails) => object
    fetchMoments: () => object
}

export type IDetails = {
    title: string,
    description: string
    image: string
}

export const UserGalleryProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const saveMoment = async (details: IDetails) => {
        try {
             const { data } = await axios.post(`http://localhost:5000/api/v1/moment`, details, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
             })
             return data
        }catch(err) {throw err}
    }

   const fetchMoments = async () => {

        try {
             const { data } = await axios.get(`http://localhost:5000/api/v1/moment`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
             })
             const { data: {moments} } = data
             return moments
        }catch(err) {throw err}
   }

    return(
        <GalleryContext.Provider
            value={{
                saveMoment,
                fetchMoments
                
            }} 
        >
            {children}
        </GalleryContext.Provider>
    )
}


