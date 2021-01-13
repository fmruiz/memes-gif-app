import React from 'react'

const InputCategory = () => {



    return (
        <>
            {/* title n input-value */}
            <div>
                <h2 className="mt-5 pt-5 text-center">Generador de gifs, imagenes animadas y <br/>sobre todo... <strong>Memes!</strong></h2>
                <h3 className="text-center mb-4">Encuentra miles de imagenes animadas</h3>
                
                {/* input value */}
                <form className="input-group shadow">
                    <input type="text" className="form-control" placeholder="Busca lo que quieras!" aria-label="" aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button">Buscar</button>
                    </div>
                </form>
            </div>
            {/* title n input-value */}
        </>
    )
}

export default InputCategory
