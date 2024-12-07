
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

  const getGridColumns = () => {

    if (windowWidth > 1720) return 6;
    if (windowWidth > 1200) return 5;
    if (windowWidth > 960) return 4;
    if (windowWidth > 720) return 3;
    if (windowWidth > 480) return 2;
    return 1;

  };


  const flipKey = `${getGridColumns()}`;

  return (

    <>

      { isLoading
        ? <p className="text-black">Loading...</p> 
        : <div className="w-full flex flex-col justify-center items-center gap-5">

            <h3 className="text-start text-black capitalize font-medium text-xl m-2">
              { category }
            </h3>
            
            <Flipper className="w-full" flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}>

              <div 
                className="w-full grid  gap-4 justify-center items-center text-black"
                style={{
                  gridTemplateColumns: `repeat(${getGridColumns()}, minmax(200px, 200px))`,
                }}
              >

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

            </Flipper>

          </div>
      }

      
    </>
    
  )
}
