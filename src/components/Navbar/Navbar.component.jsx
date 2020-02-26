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
                               <li key={nav.slug} ><NavLink  activeClassName="active" to={`/${nav.slug}`}><p>{nav.title}</p></NavLink></li>
                          
                             
                        )  
                    } )
                        
                }
            </ul>
        </div>
    )
};
export default Navbar;