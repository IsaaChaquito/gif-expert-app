import { useState } from 'react'
import { AddCategory, GifGrid, Pagination } from '../components'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const GifExpert = () => {
  
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  const onAddCategory = ( newCategory ) => {

    if( categories.length > 2 ) return

    const repeatedCategory = categories.some(c => c.toLowerCase() === newCategory.toLowerCase())

    if( !repeatedCategory ){
      setCategories( [ newCategory, ...categories])
      onSelectedCategory( newCategory )
    }
  }

  const onSelectedCategory = ( category ) => setSelectedCategory( category )

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center mb-0"> 

    {/* <FlipGrid /> testing grid with react-flip-toolkit */}
 
      <div className="m-5 flex justify-center items-center font-['elounda-regular'] text-4xl sm:scale-110 md:scale-125 p-2 text-nowrap duration-300">
        <svg  className='w-16 h-10 mr-1' xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="32" className="text  stroke-black stroke-2 fill-none scale-95">GIF</text>
        </svg> 
        
        <h1 className="text-black stroke-orange-500 stroke-2 fill-none drop-shadow ">
          Expert App
        </h1>
      </div>

      
      <div className='w-full flex flex-col justify-center items-center mb-2 '>

        <AddCategory onAddCategory={ onAddCategory }/>
        
          <div className='w-full h-[calc(100vh-260px)] overflow-y-auto bg-rose-2000 rounded-sm z-10 duration-150'>
            <SimpleBar className="w-full h-full relative !z-10" autoHide={false}>
              {
                // categories.map( ( category)  => (
                  <GifGrid  
                    key={selectedCategory}
                    category={ selectedCategory }
                  />
                // ))
              }

            </SimpleBar>
          </div>
      </div>

      { 
        (categories?.length > 0) &&  
          <Pagination 
            data={ categories } 
            selectedPage={ selectedCategory }
            onSelectedPage={ onSelectedCategory }  
          />  }
    
    {/* TODO: make a button to clear the categories and cache */}

    </div> 
  )
}

