import { useState } from "react";
import { SearchIcon } from "../assets/icons";

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState("")
  
  const onChangeInput = ({ target }) => {
    setInputValue( target.value )
  }

  const isValidInput = () => inputValue.trim().length >= 2

  const onSubmit = ( event ) => {
    event.preventDefault()
    if( !isValidInput() ) return;
  
    onAddCategory( inputValue.trim() )
    setInputValue("")
  }

  return (
    <form onSubmit={ onSubmit } className="w-auto flex justify-center items-center mb-2">
      <input 
        onChange={ onChangeInput }
        type="text" 
        className={`${isValidInput() ? 'translate-x-0 rounded-l' : 'translate-x-6 rounded'} group  bg-gray-100 p-2 px-3 text-gray-300 focus:text-gray-400 placeholder:text-gray-300  font-medium outline-none focus:outline-none ring-2 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:border-transparent duration-300 z-10`} 
        value={ inputValue }
        placeholder="Buscar categoría..."
      />

      <button className={` ${isValidInput() ? '-translate-x-0.5' : '-translate-x-12 '}  p-2 px-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-r-full active:scale-[.97] duration-500`}>
        <SearchIcon className="w-6 h-6"/>
      </button>
    </form>
  )


}