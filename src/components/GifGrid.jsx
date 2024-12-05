
import { GifItem } from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

  
  const { images, isLoading } = useFetchGifs( category )
  
  if( category === "" ) return null
  return (

    <>

      { isLoading
        ? <p className="text-black">Loading...</p> 
        : <div className="w-full flex flex-col justify-center items-center gap-5">
          
            <h3 className="text-start text-black capitalize font-medium text-xl m-2">
              { category }
            </h3>
          
            <div className="w-full h-full grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-10 justify-center items-center text-black ">

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
          </div>
      }

      
    </>
    
  )
}
