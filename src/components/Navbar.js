import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    let {mode,togglemode}=props
    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Trending Today </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sport">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`form-check form-switch text-${mode === 'light' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="checkbox" onClick={togglemode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault"> Dark mode</label>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
