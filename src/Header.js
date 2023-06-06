import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component
{
    render()
    {
        return <>
            <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="tm-site-header">
                <div className="mb-3 mx-auto text-center">
                <img src="img/logo.png" height={50}/>
                </div>            
                <h1 className="text-center">Admin Panel</h1>
            </div>
            <nav className="tm-nav" id="tm-nav">            
                <ul>
                    <li className="tm-nav-item"><Link to="/" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Home
                    </Link></li>

                    <li className="tm-nav-item"><Link to="/category" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Category
                    </Link></li>

                    <li className="tm-nav-item"><Link to="/brand" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Brand
                    </Link></li>
                    
                    <li className="tm-nav-item"><Link to="/product" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Product
                    </Link></li>
                </ul>
            </nav>            
        </div>
    </header>
        </>
    }
}