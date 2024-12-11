

export const getGifs = async ( category ) => {

  let cachedCategories = sessionStorage.getItem( 'categories' )
  let categories = JSON.parse( cachedCategories ) ?? {}
  if ( categories[ category ] ) return categories[ category ]
    

  const url = `https://api.giphy.com/v1/gifs/search?api_key=HA6xjuy13Guhck6mqmfRGbkjuRqFGCot&q=${ category }&limit=10`

  const resp = await fetch( url )
  const { data } = await resp.json()

  const gifs = data.map( img => (
    {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  ))

  categories[ category ] = gifs
  sessionStorage.setItem( 'categories', JSON.stringify( categories ) )

  return gifs
}