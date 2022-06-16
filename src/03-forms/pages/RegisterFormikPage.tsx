import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    const {
        formData, onChange, reset, isValidEmail,
        name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log( formData );
    }

    return (
        <div>
            <h1>Register Formik Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name="name"
                    onChange={ onChange }
                    className={ `${name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Name is required</span> }
                <input
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name="email"
                    onChange={ onChange }
                    className={ `${ !isValidEmail(email) && 'has-error' }` }
                />
                { !isValidEmail(email) && <span>Email is not valid</span> }
                <input
                    type="password"
                    placeholder="Password"
                    value={ password1 }
                    name="password1"
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>Password is required</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>Password must have at least 6 characters</span> }

                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={ password2 }
                    name="password2"
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Password is required</span> }
                { password2.trim().length > 0  && password1 !== password2 && <span>Password must match</span> }

                <button type="submit">Create</button>

                <button type="button" onClick={ reset }>Reset</button>

            </form>
        </div>
    )
}
