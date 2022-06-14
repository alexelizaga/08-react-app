import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt='React Logo' />
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/register'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Register Page</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='home' element={ <h1>Home</h1> } />
                <Route path='about' element={ <h1>About</h1> } />
                <Route path='register' element={ <RegisterPage /> } />

                <Route path='/*' element={ <Navigate to="/home" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
