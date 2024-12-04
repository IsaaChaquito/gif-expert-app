import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

function App() {
  
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

      <h1 className="text-slate-300 underline text-5xl font-bold m-5 p-2 drop-shadow ">
        Gif Expert App
      </h1>
  
      {/* Input */}
      {/* Gif List */}
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
  )
}

export default App
