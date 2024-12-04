import { useState } from 'react'
import { AddCategory, GifGrid } from '../components'

export const GifExpert = () => {
  
  const [categories, setCategories] = useState([""])

  const onAddCategory = ( newCategory ) => {

    if( categories.length > 1 ) return //TODO: REMOVE this line after testing

    const repeatedCategory = categories.some(c => c.toLowerCase() === newCategory.toLowerCase())

    if( !repeatedCategory ){
      setCategories( [ newCategory, ...categories])
    }
  }

  return (
    <div className="flex flex-col justify-center items-center"> 

      
      <div className="w-full h-24 fixed top-0 backdrop-blur-sm bg-white/30 z-20 flex justify-center items-center font-['elounda-regular'] text-4xl sm:scale-110 md:scale-125 p-2 text-nowrap duration-300">
        <svg  className='w-16 h-10 mr-1' xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="32" className="text  stroke-orange-500 stroke-2 fill-none scale-95">GIF</text>
        </svg> 
        
        <h1 className="text-orange-500 stroke-orange-500 stroke-2 fill-none drop-shadow ">
          Expert App
        </h1>
      </div>

      
      <div className='w-full flex flex-col justify-center items-center mt-28 '>
        <AddCategory onAddCategory={ onAddCategory }/>
        
          {
            categories.map( ( category)  => (
              <GifGrid  
                key={category}
                category={ category }
              />
            ))
          }
      </div>


    </div> 
  )
}

