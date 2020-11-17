import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navar-dark bg-primary">
                <div className="container">
                    <a to="#" className="navbar-brand" >
                        Contact Note
                    </a>
                    <div>
                    <a to="#" className="btn btn-light ml-auto">
                        New Create
                    </a>
                    </div>
                </div> 
            </nav>
        </div>
    )
}

export default Navbar



