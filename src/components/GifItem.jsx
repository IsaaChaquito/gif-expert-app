import { useState } from 'react'
import {CloseIcon, FullScreenIcon } from '../assets/icons'

export const GifItem = ({ id, title, url }) => {

  

  const [state, setState] = useState({
    isScale: false,
  })

  const handleScaleImage = () => {
    setState( prevState => ({
      ...prevState,
      isScale: !prevState.isScale
    }) )
  }

  const handleKey = ( e ) => {
    if( e.key === 'Escape' ) setState( prevState => ({ ...prevState, isScale: false }) )
  }

  return (
    <div className="w-full flex flex-col items-center flex-nowrap" key={id}>
      <p title={ title } className="text-left text-nowrap text-ellipsis max-w-full self-start overflow-hidden">{ title.trim().length > 0 ? title : 'Gif with no title' }</p>
      <button 
        onClick={ handleScaleImage }
        onKeyDown={ handleKey }
        className="relative w-fit group flex justify-center overflow-hidden rounded duration-300">
        <img  
          className={`rounded aspect-video group-hover:scale-125 group-hover:blur-md  group-hover:grayscale duration-300`} src={ url } alt={ title } 
        />
        
        <FullScreenIcon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-8 w-8 text-transparent group-hover:text-white/80 scale-0 group-hover:scale-105 hover:scale-110 group-active:scale-95 duration-300" />
      </button>


      {
        state.isScale && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-40 animate-[fade-in_0.2s_ease]">
            <div 
              onClick={ 
                (e) => (e.target === e.currentTarget) && handleScaleImage() 
              }
              className='relative flex justify-center items-center w-full h-full'
            > 
              <CloseIcon 
                onClick={ handleScaleImage } 
                className="absolute top-5 right-5 text-white/80 w-8 h-8 hover:p-1 bg-black/50 shadow-2xl rounded cursor-pointer duration-300" 
              />

              <div 
                onClick={ handleScaleImage } 
                className="absolute top-5 left-5 flex justify-center items-center text-white/80 w-8 h-8 hover:p-1 bg-black/50 shadow-2xl rounded cursor-pointer duration-300" >
                Esc
              </div>

              <div className='relative w-full flex justify-center items-center'>  
                <img 
                  className="w-[80%] max-w-[1200px] aspect-video rounded" 
                  src={ url } 
                  alt={ title } 
                />
                { title &&
                  <p className='absolute bottom-0 px-2 py-0.5 bg-black/60 text-white z-10 text-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl '>
                  { title }
                </p>

                }
              </div>
            </div>
          </div>
        )
      }


    </div>
  )
}
