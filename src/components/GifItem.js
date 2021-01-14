import React from 'react'

const GifItem = ({ imagen }) => {
    return (
        <div className="card d-block shadow mx-3 my-3">
            <img className="img-fluid rounded" src={ imagen.img } alt={ imagen.title }/>
            <p className="m-0 card-text text-center">{ imagen.title }</p>
        </div>
    )
}

export default GifItem
