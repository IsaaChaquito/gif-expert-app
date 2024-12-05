import { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs'

const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs( category )
    setImages( newImages )
  }

  useEffect( () => {
    category && getImages()
    setIsLoading(false)
  }, [])
  
  return {
    images,
    isLoading
  }
}


export default useFetchGifs