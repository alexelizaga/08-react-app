import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components';

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
                <MyTextInput
                  label="First name"
                  name="firstName"
                  placeholder='First name'
                />

                <MyTextInput
                  label="Last name"
                  name="lastName"
                  placeholder='Last name'
                />

                <MyTextInput
                  label="Email Adress"
                  name="email"
                  placeholder='Email'
                  type='email'
                />

                <MySelect label="Job Type" name="jobType">
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-jr">IT Jr.</option>
                </MySelect>

                <MyCheckbox label="Terms & Conditions" name="terms" />

                <button type='submit'>Submit</button>
              </Form>
            )
          }

        </Formik>
        
    </div>
  )
}
