import React, { useState } from 'react'

const InputCategory = ({ setCategorias }) => {

    // estado del input
    const [inputValue, setInputValue] = useState("")

    // cuando cambia el valor de la busqueda
    const inputChange = (e) => {
        setInputValue(e.target.value)
    }

    // cuando se envia realiza el submit del input
    const handleClick = () => {
        if( inputValue.trim().length > 2 ) {
            setCategorias( c => [...inputValue, c])
            setInputValue("")
        }
    }

    return (
        <>
            {/* titulo e input */}
            <div>
                <h2 className="mt-5 pt-5 text-center">Generador de gifs, imagenes animadas y <br/>sobre todo... <strong>Memes!</strong></h2>
                <h3 className="text-center mb-4">Encuentra miles de imagenes animadas</h3>
                
                {/* input value */}
                <div className="input-group shadow">
                    <input type="text" className="form-control" placeholder="Busca lo que quieras!" value={ inputValue } onChange={ inputChange } aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button" onClick={ handleClick }>Buscar</button>
                    </div>
                </div>
            </div>
            {/* titulo e input */}
        </>
    )
}

export default InputCategory
