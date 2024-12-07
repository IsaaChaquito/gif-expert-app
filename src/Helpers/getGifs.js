

export const getGifs = async ( category ) => {

  const cachedGifs = localStorage.getItem( category );

  if (cachedGifs) {
    return JSON.parse(cachedGifs);
  }
    
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

  localStorage.setItem( category, JSON.stringify( gifs ) )

  return gifs
}