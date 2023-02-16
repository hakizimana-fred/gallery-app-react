import { useContext, useEffect, useState  } from 'react'
import { GalleryContext } from '../context/UserGallery'

export const GalleryScreen = () => {
  const [results, setResuts] = useState<any[]>([])
  const { fetchMoments } = useContext(GalleryContext)

  useEffect(() => {
     (async () => {
        const data: any = await fetchMoments()
        data && setResuts(data)
     })()
  }, [])

  

    return (
        <div className="p-4 container m-auto">
        <div className="grid grid-cols-4 gap-4 m-auto">
        {results.map((result) => (
          <div key={result._id} className="bg-white shadow-lg border border-gray-200 rounded-lg p-4">
            <img src={result.image} alt={result.title} className="w-full rounded-lg" />
            <h2 className="text-gray-800 font-bold text-xl mt-4 text-center">{result.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{result.description}</p>
          </div>
        ))}
      </div>
      </div>

    )
}