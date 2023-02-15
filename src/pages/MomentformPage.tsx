import { useContext, useState } from "react"
import { GalleryContext } from "../context/UserGallery"

export const CreateMoment = () => {
    const [ details, setDetails ] = useState({title: "", description: "", image: ""})
    const { saveMoment } = useContext(GalleryContext)

    const onChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => setDetails(prev => ({...prev, [e.target.name]: e.target.value}))

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('well then', details)
    }

    return (
        <form
        className="flex flex-col justify-center max-w-lg m-auto"
        onSubmit={onSubmit}
      
      >
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          Create Gallery
        </h2>
        <div>
        <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Select an image to upload
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
        </div>
        <div>
        <input
          required
           type="text"
           name="title"
          className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Title" 
          onChange={onChange}
          value={details.title}
       
        />
        </div>
   
        <div>
        <textarea
       required
        name="description"
       className="mb-6 focus:ring-indigo-500 focus:border-indigo-500 border-2 w-full p-4 sm:text-sm border-gray-300 rounded-md"
       placeholder="Enter Description" 
        onChange={onChange}
        value={details.description}
    />
        </div>
       
        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
         Submit
        </button>
        </form>
    )
}