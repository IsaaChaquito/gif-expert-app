import { useState } from 'react'
import {CloseIcon, FullScreenIcon, DeleteEmptyIcon, DeleteOutlineIcon } from '../assets/icons'

export const GifItem = ({ id, title, url, handleDeleteGif }) => {

  

  const [state, setState] = useState({
    isScale: false,
  })

  const handleScaleGif = () => {
    setState( prevState => ({
      ...prevState,
      isScale: !prevState.isScale
    }) )
  }


  const handleKey = ( e ) => {
    if( e.key === 'Escape' ) setState( prevState => ({ ...prevState, isScale: false }) )
  }

  return (
    <div className="relative w-full flex flex-col items-center flex-nowrap" key={id}>
      <p title={ title } className="text-left text-nowrap text-ellipsis max-w-full self-start overflow-hidden">{ title.trim().length > 0 ? title : 'Gif with no title' }</p>

      <div className='GIF-CONTAINER group relative flex justify-center items-center overflow-hidden rounded '>

        <img  
          className={`aspect-video group-hover:scale-125 group-hover:blur-md group-hover:grayscale pointer-events-none duration-300 `} 
          src={ url } 
          alt={ title } 
        />
        
        <div className='GIF-BUTTONS group/btns absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex justify-center items-center peer-hover:text-white/80 text-white scale-00 peer-hover:scale-105 hover:scale-105 peer-active:scale-95 duration-300'>

          <button 
            onClick={ handleScaleGif }
            onKeyDown={ handleKey }
            className="relative group/btns w-full h-full text-white flex justify-center overflow-hidden rounded cursor-pointer duration-300"
          >
            
            <FullScreenIcon className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-8 w-8 text-white group-hover/btns:text-white/80 scale-0 group-hover:scale-105 hover:scale-110 duration-300 z-10" />
          </button>  

          <div onClick={ handleDeleteGif}  className='z-50 cursor-pointer'>
              <DeleteOutlineIcon className="peer hover:scale-0 hover:text-red-500 absolute top-1/2 right-10 -translate-y-1/2 h-fit w-fit text-transparent group-hover:text-white/80 scale-0 group-hover:scale-105  group-active:scale-95 duration-300 rounded-full bg-red-500/30 hover:bg-red-500/70 p-1 shadow" />

              {/* <DeleteEmptyIcon className="peer-hover:scale-100 hover:text-red-500 scale-0 absolute top-1/2 right-10 -translate-y-1/2 h-fit w-fit text-transparent group-hover:text-white/80  group-hover:scale-105 hover:scale-110 group-active:scale-95 duration-300 p-1" /> */}
          </div>
        
        </div>
        
      </div>


      {
        state.isScale && (
          <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/80 z-50 animate-[fade-in_0.2s_ease]">
            <div 
              onClick={ (e) => (e.target === e.currentTarget) && handleScaleGif() }
              className='relative flex justify-center items-center w-full h-full'
            > 
              <CloseIcon 
                onClick={ handleScaleGif } 
                className="absolute top-5 right-5 text-white/80 w-8 h-8 hover:p-1 bg-black/50 shadow-2xl rounded cursor-pointer duration-300 z-50" 
              />

              <div 
                onClick={ handleScaleGif } 
                className="absolute top-5 left-5 flex justify-center items-center text-white/80 w-8 h-8 hover:p-1 bg-black/50 shadow-2xl rounded cursor-pointer duration-300" >
                Esc
              </div>

              <img 
                className="w-[80%] max-w-[1200px] aspect-video rounded shadow-2xl" 
                src={ url } 
                alt={ title } 
              />
              {
                title &&
                <p className='absolute bottom-0 w-full rounded-b px-2 py-0.5 bg-black/60 text-white z-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl duration-300'>
                  { title }
                </p>
              }
            </div>
          </div>
        )
      }


    </div>
  )
}
