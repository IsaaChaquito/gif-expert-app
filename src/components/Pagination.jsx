

export const Pagination = ({ data, selectedPageIndex, onSelectedPage }) => {

  console.log('data', data);
  console.log('selectedPageIndex', selectedPageIndex);

  const getLeftIndex = () => {
    if( selectedPageIndex === 0 ) return data.length - 1
    return selectedPageIndex - 1
  }

  const getRightIndex = () => {
    if( selectedPageIndex === data.length - 1 ) return 0
    return selectedPageIndex + 1
  }

  return (
    <div className="pagination w-[300px] sm:w-[400px] h-16 bg-black/50  p-2 rounded flex justify-center items-center gap-2 duration-300">
      {/* {
        data.map( (page, index) => (
          (page === selectedPage) 
          ? (
              <button key={ index } title={ page } className=" text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 capitalize">{ page }</button>
            ) 
          : (
            <button 
              key={ index } 
              className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75 capitalize" 
              onClick={ () => onSelectedPage( page ) }
            >
              { page }
            </button>
          )
        ))
      } */}

            {
              data.length > 2 &&
              <button
                className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75 capitalize" 
                onClick={ () => onSelectedPage( data[getLeftIndex()] ) }
              >
                { data[getLeftIndex()] }
              </button>
            }

            <button 
              title={ data[0] } 
              // onClick={ () => onSelectedPage( data[selectedPageIndex] ) }
              className=" text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 capitalize"
            >
              { data[selectedPageIndex] }
            </button>

            {
              data.length > 1 &&
              <button
                className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden  p-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75 capitalize" 
                onClick={ () => onSelectedPage( data[getRightIndex()] ) }
              >
                { data[getRightIndex()] }
              </button>
            }


    </div>
  )
}

export default Pagination