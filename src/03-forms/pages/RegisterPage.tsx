import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { formData, onChange, name, email, password1, password2 } = useForm({
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
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name="name"
                    onChange={ onChange }
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name="email"
                    onChange={ onChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={ password1 }
                    name="password1"
                    onChange={ onChange }
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={ password2 }
                    name="password2"
                    onChange={ onChange }
                />

                <button type="submit">Create</button>

            </form>
        </div>
    )
}
