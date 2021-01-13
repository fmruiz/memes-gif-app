import React, { useState } from 'react'
import InputCategory from './components/InputCategory'
import NavMenu from './components/NavMenu'

const GifApp = () => {

    // const [categorias, setCategorias] = useState(["simpsons"])

    return (
        <>
            {/* menu navegacion */}
            <NavMenu />

            {/* titulo y barra de busqueda */}
            <InputCategory />
        </>
    )
}

export default GifApp
