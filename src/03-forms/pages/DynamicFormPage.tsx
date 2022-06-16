import { Formik, Form } from 'formik'; 
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>

        <Formik
          initialValues={{

          }}
          onSubmit={ (values) => {
            console.log(values);
          }}
        >
          { (formik) => (
            <Form>
              { 
                formJson.map( ({type, name, placeholder, label }) => {

                  return <MyTextInput
                            key={ name }
                            type={ type as any }
                            label={ label}
                            name={ name }
                            placeholder={ placeholder } />
                })
              }

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
