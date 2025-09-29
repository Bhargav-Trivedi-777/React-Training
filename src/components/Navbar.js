import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.darkMode ? "dark" : "light"} bg-${props.darkMode ? "dark" : "light"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.siteTitle}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.page1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.page2}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">{props.page3}</Link>
                            </li>
                        </ul>
                        <div className='bg-danger rounded me-2' style={{ height: '30px', width: '30px' }} onClick={()=>{props.color('red')}}></div>
                        <div className='bg-primary rounded me-2' style={{ height: '30px', width: '30px' }} onClick={()=>{props.color('blue')}}></div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                        <div className="my-3 ms-3">
                            <div className="form-check form-switch my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={props.toggleMode}
                                    role="switch"
                                    id="switchCheckDefault"
                                    checked={props.darkMode}
                                />
                                <label className="form-check-label" htmlFor="switchCheckDefault">
                                    {props.darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    moreOption: PropTypes.string.isRequired,
}

