import React, { useState } from 'react'

import NavMenu from './components/NavMenu'
import InputCategory from './components/InputCategory'
import SearchGifs from './components/SearchGifs'

const GifApp = () => {

    // estado de las categorias
    const [categorias, setCategorias] = useState([])

    return (
        <>
            {/* menu navegacion */}
            <NavMenu />

            {/* titulo y barra de busqueda */}
            <InputCategory setCategorias={ setCategorias } />

            {/* container de gifs */}
            <SearchGifs categorias={ categorias }/>
        </>
    )
}

export default GifApp
