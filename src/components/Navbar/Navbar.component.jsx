import React from 'react';
import './Navbar.styles.scss';
import { NavLink} from 'react-router-dom'

const Navbar =  ({navBar }) => {
    
    return (
        <div >
            <ul className="navbar_ul">
                { navBar.map((nav, index) => {
                    return (
                         index <= 3 && 
                            <NavLink  activeClassName="active" key={nav.slug} to={`/${nav.slug}`}><li><p>{nav.title}</p></li></NavLink>
                          
                             
                        )  
                    } )
                        
                }
            </ul>
        </div>
    )
};
export default Navbar;