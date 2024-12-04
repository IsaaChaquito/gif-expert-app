
import { GifItem } from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

  
  const { images, isLoading } = useFetchGifs( category )
  
  if( category === "" ) return <></>
  return (

    <>

      { isLoading
        ? <p className="text-black">Loading...</p> 
        : <>
            <h3 className="text-start m-5 text-black capitalize font-medium text-xl ">
              { category }
            </h3>
          
            <div className="w-2/3 grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-10 justify-center text-black">

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
      }

      
    </>
    
  )
}
