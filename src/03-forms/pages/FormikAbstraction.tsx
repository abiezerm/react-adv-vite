import { Formik, Form } from "formik"
import * as Yup from 'yup'

import { CustomCheckBox, CustomInput, CustomSelect } from "../components"

import '../styles/styles.css'

export const FormikAbstraction = () => {
    
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
                    () => (
                        <Form>
                            <CustomInput
                                label="First Name" 
                                name="firstName"  
                            />

                            <CustomInput
                                label="Last Name" 
                                name="lastName"  
                            />

                            <CustomInput
                                type="email"
                                label="Email" 
                                name="email"  
                            />

                            <CustomSelect label="Job type" name="jobType" >
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                            </CustomSelect>

                            <CustomCheckBox label="Terms & conditions" name="terms" />

                            <button type="submit"> Submit</button>
                        </Form>
                    )
                }
                
            </Formik>
            
        </div>
    )
}

