

export const Pagination = ({ data, selectedPage, onSelectedPage }) => {


  return (
    <div className="pagination w-[300px] sm:w-[400px] h-16 bg-black/50  p-2 rounded flex justify-center items-center gap-2 duration-300">
      {
        data.map( (page, index) => (
          (page === selectedPage) 
          ? (
              <button key={ index } title={ page } className=" text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300">{ page }</button>
            ) 
          : (
            <button 
              key={ index } 
              className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75" 
              onClick={ () => onSelectedPage( page ) }
            >
              { page }
              {/* { index + 1 } */}
            </button>
          )
        ))
      }
    </div>
  )
}

export default Pagination