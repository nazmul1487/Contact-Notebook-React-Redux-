import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" >
                        Contact Note
                    </Link>
                    <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto">
                        New Create
                    </Link>
                    </div>
                </div> 
            </nav>
        </div>
    )
}

export default Navbar



