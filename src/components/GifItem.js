import React from 'react'

const GifItem = ({ imagen }) => {
    return (
        <div>
            <img src={ imagen.img } alt={ imagen.title }/>
        </div>
    )
}

export default GifItem
