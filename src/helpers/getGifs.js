export const getGifs = async( categorias ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorias) }&limit=30&api_key=Au9pLB17q3gDdo3dNOIdOWQGtOideNWF`;
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            img: gif.images.original.url,
            title: gif.title
        }
    })

    console.log(data)

    return gifs
}
