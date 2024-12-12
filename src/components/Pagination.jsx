import { Flipped, Flipper } from "react-flip-toolkit";


export const Pagination = ({ data, selectedPageIndex, onSelectedPage }) => {

  const getLeftIndex = () => {
    if( selectedPageIndex === 0 ) return data.length - 1
    return selectedPageIndex - 1
  }

  const getRightIndex = () => {
    if( selectedPageIndex === data.length - 1 ) return 0
    return selectedPageIndex + 1
  }

  const flipKey = `${selectedPageIndex}`

  return (
      // <Flipper flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}> 
      <Flipper flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}> 
    <div className="pagination w-[300px] sm:w-[400px] h-16 bg-black/50  p-2 rounded flex justify-center items-center gap-2 duration-300">


        <Flipped flipId={`${getLeftIndex()}-gif`} >
          <div>
          {
            data.length > 2 &&
            <button
              title={ data[getLeftIndex()] } 
              className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden px-2 py-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75 capitalize" 
              onClick={ () => onSelectedPage( data[getLeftIndex()] ) }
            >
              { data[getLeftIndex()] }
            </button>
          }
          </div>
        </Flipped>

        <Flipped flipId={`${selectedPageIndex}-gif`} >
          <div>
            <button 
              title={ data[selectedPageIndex] } 
              className=" text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden py-1 px-2 bg-blue-700 hover:bg-blue-800 rounded duration-300 capitalize"
            >
              { data[selectedPageIndex] }
            </button>
          </div>
        </Flipped>

        <Flipped flipId={`${getRightIndex()}-gif`} >
          <div>
          {
            data.length > 1 &&
            <button
              title={ data[getRightIndex()] }
              className="text-white min-w-8 max-w-42 text-ellipsis text-nowrap overflow-hidden px-2 py-1 bg-blue-700 hover:bg-blue-800 rounded duration-300 scale-75 capitalize" 
              onClick={ () => onSelectedPage( data[getRightIndex()] ) }
            >
              { data[getRightIndex()] }
            </button>
          }
          </div>
        </Flipped>


    </div>
      </Flipper>
  )
}

export default Pagination