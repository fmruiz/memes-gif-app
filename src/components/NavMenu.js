import React from 'react'

const NavMenu = () => {
    return (
        <>
            {/* nav menu */}
            <div className="container-fluid nav-menu shadow">
                <div className="row">
                    <div className=" d-flex justify-content-around align-items-center py-3">
                        <h1>Memes-Generator</h1>

                        <div className="links">
                            <a href="#" className="mx-3">Inicio</a>
                            <a href="#" className="mx-3">Gifs Populares</a>
                            <a href="#" className="mx-3">Ayuda</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* nav menu */}
        </>
    )
}

export default NavMenu
