import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
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
                            to='/register'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/formik-basic'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Formik basic</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='home' element={ <h1>Home</h1> } />
                <Route path='register' element={ <RegisterPage /> } />
                <Route path='formik-basic' element={ <FormikBasicPage /> } />

                <Route path='/*' element={ <Navigate to="/home" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
