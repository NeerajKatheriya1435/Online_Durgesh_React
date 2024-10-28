import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ menuComp1, menuComp2 }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/">{props.menuComp1}</a> */}
                                <a className="nav-link" href="/">{menuComp1}</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/">{props.menuComp2}</a> */}
                                <a className="nav-link" href="/">{menuComp2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">ApnaContact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

Navbar.propTypes = {
    menuComp1: PropTypes.string,
    menuComp2: PropTypes.string.isRequired
}


//it will not use for further in react.js

// Navbar.defaultProps = {
//     menuComp1: 'Durgseh',
//     menuComp2: 'Durgseh123',
// }