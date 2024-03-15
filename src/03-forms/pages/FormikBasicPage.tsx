import { FormikErrors, useFormik } from "formik"

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if(values.firstName === '') {
            errors.firstName = 'First Name is required'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'First Name must be at 15 characters or less'
        }

        if(values.lastName === '') {
            errors.lastName = 'First Name is required'
        } else if (values.lastName.length > 10) {
            errors.lastName = 'Last Name must be 10 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const { handleChange, values, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            firstName: 'abies',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            
            console.log(values)
        },
        validate,
    })



    
    return (
        <div>
            <h1>Formik Base Tutorial</h1>

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={ values.firstName}
                    onChange={ handleChange }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={ values.lastName}
                    onChange={ handleChange }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={ values.email}
                    onChange={ handleChange}
                />
                { touched.email &&  errors.email && <span>{ errors.email }</span> }

                <button type="submit"> Submit</button>

            </form>
        </div>
    )
}

