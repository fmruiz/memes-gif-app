import React, { useState, useEffect } from 'react'

import GifItem from './GifItem'

import { getGifs } from '../helpers/getGifs'

const SearchGifs = ({ category }) => {

    // arreglo de imagenes
    const [imagenes, setImagenes] = useState([])

    // para que se ejecute solo una vez cuando cambie el arreglo de category
    useEffect(() => {
       getGifs(category)
            .then( imgs => setImagenes( imgs ))
    }, [ category ])

    return (
        <>
            <h2 className="text-center">{ category.toUpperCase() }</h2>
            <div className="gif-container mb-5 pb-5 pt-3">
                {
                    imagenes.map( imagen=> {
                        return ( <GifItem
                                    key={ imagen.id }
                                    imagen={ imagen }
                                /> )
                    })
                }    
            </div>
        </>
    )
}

export default SearchGifs
