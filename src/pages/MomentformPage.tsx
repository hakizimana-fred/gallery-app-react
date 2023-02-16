import { useContext, useState } from "react"
import { GalleryContext } from "../context/UserGallery"
import FileBase from 'react-file-base64';
import { useNavigate } from "react-router-dom";

export const CreateMoment = () => {
    const [ details, setDetails ] = useState({title: "", description: "", image: ""})
    const { saveMoment } = useContext(GalleryContext)
    const [warnings, setWarnings] = useState({})
    const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => setDetails(prev => ({...prev, [e.target.name]: e.target.value}))

    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
          const errors = validate(details)
          if (Object.keys(errors).length > 0) {
            setWarnings(errors)    
            return
          }
         const data  = await saveMoment(details) 
         if(data) return navigate('/gallery')

        }catch(err) {
          console.log(err)
        }
    }

    const validate = (details: any) => {
      const errors: any = {}
      if (!details.title) errors.title = "Title is required"
      if (details.title.length < 3) errors.title = "Title is must be atleast 3 chars long"
      if (!details.description) errors.description = "description is required"
      if (details.description.length < 6) errors.description = "description must be atleast 6 chars long"
      if (!details.image) errors.image = "image is requried"

      return errors
    }

    return (
        <form
        className="flex flex-col justify-center max-w-lg m-auto"
        onSubmit={onSubmit}
      
      >
       {Object.keys(warnings).length > 0 && Object.entries(warnings).map(([key, value]) => ( 
         <div role="alert">
         <div className="mt-3 bg-red-500 text-white font-bold rounded-t px-4 py-2">
         </div>
         <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
           <p>{value as string}</p>
         </div>
       </div> 
        ))}
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          Create Gallery
        </h2>
        <div>
        <div className="mb-4">
        
       <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Select an image to upload
        </label>
        <FileBase
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          multiple={false}
          onDone={({ base64 }: any) => setDetails({ ...details, image: base64 })} />
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