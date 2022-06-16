import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',

                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Name must be at least 2 characters long')
                            .max(15, 'Name must be less than 15 characters long')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password1: Yup.string()
                            .min(6, 'Must be at least 6 characters')
                            .required('Required'),
                        password2: Yup.string()
                            .oneOf([ Yup.ref('password1') ], 'Passwords must match')
                            .required('Required'),
                    })
                }
            >
                { 
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                placeholder='Name'
                            />
                            <MyTextInput
                                label="Email Adress"
                                name="email"
                                placeholder='Email'
                                type='email'
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                placeholder='Password'
                                type='password'
                            />

                            <MyTextInput
                                label="Confirm password"
                                name="password2"
                                placeholder='Password'
                                type='password'
                            />

                            <button type="submit">Create</button>

                            <button type="button" onClick={ handleReset }>Reset</button>

                        </Form>
                    )
                }
            </Formik>

            
        </div>
    )
}
