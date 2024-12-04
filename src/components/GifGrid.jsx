import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {

    const newImages = await getGifs( category )
    setImages( newImages )
  }

  useEffect( () => {
    getImages()

    console.log({images});
  }, [])

  return (

    <>
      <h3>
        <li className="text-center py-2 text-black">{ category }</li>
      </h3>



    
      <div className="flex flex-col text-black">

        {
          images.map( ({ id, title, url }) => (
            <GifItem 
              key={ id }
              id={ id } 
              title={ title }
              url={ url }
            />
          ))
        }

      </div>


    </>
    
  )
}
