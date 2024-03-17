import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import '../styles/styles.css'
import { CustomInput } from '../components'

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => console.log(values) }
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'should have 2 characters or more')
                        .max(15, 'should have less than 15 characters')
                        .required("Name is required"),
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    password1: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Passwords must match')
                        .required('Password is required')
                        .min(6, 'Password must be at least 6 characters')
                })}
                >

                {({ resetForm }) => (
                    <Form>

                        <CustomInput label='Name' name="name" />

                        <CustomInput type="email" label='Email' name="email" />

                        <CustomInput 
                            type="password" 
                            label='Password' 
                            name="password1"
                            placeholder='******' />

                        <CustomInput 
                            type="password" 
                            label='Password' 
                            name="password2"
                            placeholder='******' />

                        <button type="submit">Create</button>
                        <button type="button" onClick={() => resetForm()}>Reset</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

