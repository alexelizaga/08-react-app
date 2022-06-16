import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { MySelect } from '../components/MySelect';
import { MyTestImput } from '../components/MyTestImput';

import '../styles/styles.css';


export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={
            Yup.object({
              firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              terms: Yup.boolean().oneOf([true], 'Must accept conditions'),
              jobType: Yup.string().required('Required').notOneOf(['it-jr'], 'Invalid job type'),
            }
          )}
        >

          {
            (formik) => (
              <Form>
                <MyTestImput
                  label="First name"
                  name="firstName"
                  placeholder='First name'
                />

                <MyTestImput
                  label="Last name"
                  name="lastName"
                  placeholder='Last name'
                />

                <MyTestImput
                  label="Email Adress"
                  name="email"
                  placeholder='Email'
                  type='email'
                />

                <label htmlFor="email">Email ADRESS</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="span" />

                <MySelect label="Job Type" name="jobType">
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-jr">IT Jr.</option>
                </MySelect>

                <label>
                  <Field name="terms" type="checkbox" />
                  Terms and conditions
                </label>
                <ErrorMessage name="terms" component="span" />

                <button type='submit'>Submit</button>
              </Form>
            )
          }

        </Formik>
        
    </div>
  )
}
