
import { GifItem } from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"
import { Flipped, Flipper } from 'react-flip-toolkit'
import { useEffect, useState } from "react"

export const GifGrid = ({ category }) => {

  
  const { images, isLoading } = useFetchGifs( category )
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if( category === "" ) return null

  const flipKey = `${windowWidth}-${images.map(img => img.id).join('-')}`;

  return (

    <>

      { isLoading
        ? <p className="text-black">Loading...</p> 
        : <div className="w-full flex flex-col justify-center items-center gap-5">

            <h3 className="text-start text-black capitalize font-medium text-xl m-2">
              { category }
            </h3>
            
            {/* <Flipper className="w-full" flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}>

              <div className="w-full h-full grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-10 justify-center items-center text-black ">

                {
                  images.map( ({ id, title, url }) => (
                    <Flipped key={id} flipId={`${id}-gif`} >
                      <div>
                        <GifItem key={id} id={id} title={title} url={url} />
                      </div>
                    </Flipped>

                  ))
                }

              </div>

            </Flipper> */}

<Flipper className="w-full" flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }} debug>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {images.map(({ id, title, url }) => (
                <Flipped key={id} flipId={id}>
                  <div>
                    <GifItem id={id} title={title} url={url} />
                  </div>
                </Flipped>
              ))}
            </div>
          </Flipper>

          </div>
      }

      
    </>
    
  )
}
