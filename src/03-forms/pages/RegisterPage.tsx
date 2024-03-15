import { FormEvent } from 'react'

import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const { 
        formData, onChange, resetForm, isValidEmail,
        name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={ name }
                    onChange={ onChange}
                    className={ `${name.trim().length <= 0 && 'has-error'}`}
                />
                { name.trim().length <= 0 && <span>This field is required</span> }

                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={ email }
                    onChange={ onChange}
                    className={ `${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Email not valid</span> }

                <input 
                    type="password" 
                    placeholder="Password1" 
                    name="password1"
                    value={ password1}
                    onChange={ onChange}
                    className={ `${password1.trim().length <= 0 && 'has-error'}`}
                />
                { password1.trim().length <= 0 && <span>This field is required</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>This field is required</span> }

                <input 
                    type="password" 
                    placeholder="Password2" 
                    name="password2"
                    value={ password2 }
                    onChange={ onChange}
                    className={ `${password2.trim().length <= 0 && 'has-error'}`}
                />
                { password2.trim().length <= 0 && <span>This field is required</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}

