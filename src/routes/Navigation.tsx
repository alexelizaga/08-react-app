import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import {
    DynamicFormPage,
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage
} from '../03-forms/pages';

import { } from '../03-forms/pages/FormikBasicPage';

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
                    <li>
                        <NavLink
                            to='/formik-yup'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Formik yup</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/formik-components'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Formik components</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/formik-abstraction'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Formik Abstraction</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/formik-register'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Formik Register</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dynamic-form'
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                        >Dynamic Form</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='home' element={ <h1>Home</h1> } />
                <Route path='register' element={ <RegisterPage /> } />
                <Route path='formik-basic' element={ <FormikBasicPage /> } />
                <Route path='formik-yup' element={ <FormikYupPage /> } />
                <Route path='formik-components' element={ <FormikComponents /> } />
                <Route path='formik-abstraction' element={ <FormikAbstraction /> } />
                <Route path='formik-register' element={ <RegisterFormikPage /> } />
                <Route path='dynamic-form' element={ <DynamicFormPage /> } />

                <Route path='/*' element={ <Navigate to="/home" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
