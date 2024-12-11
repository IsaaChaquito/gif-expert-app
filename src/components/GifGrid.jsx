
import { GifItem } from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"
import { Flipped, Flipper } from 'react-flip-toolkit'
import { useEffect, useRef, useState } from "react"

export const GifGrid = ({ category }) => {

  
  const { images, isLoading } = useFetchGifs( category )

  const [gifs, setGifs] = useState( images )  
  const gridRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    if (gridRef.current) {
      console.log('grid width', gridRef.current.innerWidth);
    }
  }, [gridRef?.current?.innerWidth]);

  useEffect(() => {

    setGifs(images)

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  if( category === "" ) return null

  const getGridColumns = () => {

    if (windowWidth > 1720) return 6;
    if (windowWidth > 1200) return 5;
    if (windowWidth > 960) return 4;
    if (windowWidth > 720) return 3;
    if (windowWidth > 480) return 2;
    return 1;

  };
  

  const handleDeleteGif = ( id ) => {
    setGifs( prevState => prevState.filter( gif => gif.id !== id ) )
  }


  const flipKey = `${getGridColumns()}`;

  return (

    <>

      { isLoading
        ? <p className="text-black font-medium text-lt text-center p-2">Loading...</p> 
        : <div className="w-full flex flex-col justify-center items-center gap-5 bg-red-3000">

            <h3 className="text-start text-black capitalize font-medium text-xl m-2">
              { category }
            </h3>
            
            <Flipper className="w-full " flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}>

              <div 
                ref={ gridRef }
                className="w-full grid gap-10 justify-center items-center text-black "
                style={{
                  gridTemplateColumns: `repeat(${getGridColumns()}, minmax(200px, 200px))`,
                }}
              >

                {
                  gifs.map( ({ id, title, url }) => (
                    <Flipped key={id} flipId={`${id}-gif`} >
                      <div>
                        <GifItem 
                          key={id} 
                          id={id} 
                          title={title} 
                          url={url} 
                          handleDeleteGif={ () => handleDeleteGif( id ) }
                        />
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
