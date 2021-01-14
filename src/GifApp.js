import React, { useState } from 'react'

import NavMenu from './components/NavMenu'
import InputCategory from './components/InputCategory'
import SearchGifs from './components/SearchGifs'
import Footer from './components/Footer'

const GifApp = () => {

    // estado de las categorias
    const [categorias, setCategorias] = useState(["simpsons"])

    return (
        <>
            {/* menu navegacion */}
            <NavMenu />

            {/* titulo y barra de busqueda */}
            <InputCategory setCategorias={ setCategorias } />

            {/* container de gifs */}
            <ol className="mt-5 pt-3">
                {
                    categorias.map( category => {
                        return <SearchGifs 
                                    key={ category }
                                    category={ category }
                                />
                    })  
                }
            </ol>

            {/* footer */}
            <Footer />
        </>
    )
}

export default GifApp
