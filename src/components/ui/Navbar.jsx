import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../actions/auth';


export const Navbar = () => {

    const {user} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    
    const handleLogout = ()=>{
        dispatch(logout())
        localStorage.removeItem('user')
        navigate('/login',{replace:true})
    }

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link 
                to='/marvel' 
                className='navbar-brand navitem'
            >
                HeroesApp

            </Link>

            <div className="navbar-collapse">
               
                    <NavLink 
                        className='nav-link navitem'
                        to='/marvel'
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className='nav-link navitem'
                        to='/dc'
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className='nav-link navitem'
                        to='/search'
                    >
                        Search
                    </NavLink>

                    <NavLink
                        className='nav-link navitem'
                        to='/fight'
                    >
                        Fight
                    </NavLink>
                
            </div>
            
            <div className="d-flex">

                <ul className='navbar-nav ml-auto'>

                    <span className='nav-item nav-link text-info'>{user}</span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>

            </div>

        </nav>
        
    )
}
