import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {

    
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ values => console.log(values)}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                    lastName: Yup.string().required('Last Name is required'),
                    email: Yup.string().email('Invalid email address').required('Email is required'),
                    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string().required('Job Type is required')
                })}
            >
                {
                    (formkik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label >
                                <Field type="checkbox" name="terms" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type="submit"> Submit</button>
                        </Form>
                    )
                }
                
            </Formik>
            
        </div>
    )
}

