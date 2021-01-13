import React, { useState, useEffect } from 'react'

import { getGifs } from '../helpers/getGifs'

const SearchGifs = ({ categorias }) => {

    // arreglo de imagenes
    const [imagenes, setImagenes] = useState([])

    // para que se ejecute solo una vez cuando cambie el arreglo de categorias
    useEffect(() => {
       getGifs(categorias)
            .then( imgs => setImagenes( imgs ))
    }, [ categorias ])

    console.log(imagenes)

    return (
        <>
            <h2>{ categorias }</h2>
            <div>
                {
                    imagenes.map( imagen=> {
                        return <img src={ imagen.img }/>
                    })
                }    
            </div>
        </>
    )
}

export default SearchGifs
