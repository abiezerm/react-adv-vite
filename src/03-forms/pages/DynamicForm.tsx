
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';
import { CustomInput, CustomSelect } from '../components';

const initialValues : { [key: string]: any } = {};
const requiredFields : { [key: string]: any } = {};

formJson.forEach(({ name, value, validations }) => {
    initialValues[name] = value;

    if(validations) {
        let schema = Yup.string()
        validations.forEach((validation) => {
            
            if(validation.type === 'required') {
                schema = schema.required(validation.message);
            }

            //TODO: Add more validations
        });

        requiredFields[name] = schema;
    }
});

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log('values', values)}
            >
                { (formik) => (
                    <Form noValidate>
                        {formJson.map(({ type, name, placeholder, label, options }) => {

                            if(type === 'input' || type === 'password' || type === 'email') {
                                return <CustomInput 
                                        key={name}
                                        type={ (type as any)}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
    
                                    />
                            } else if (type === 'select') {
                                return (
                                    <CustomSelect 
                                        key={name}
                                        label={label} 
                                        name={name} >
                                        {
                                            options?.map(({id, label}) => {
                                                return <option key={id} value={id}>{label}</option>
                                            })
                                        }


                                    </CustomSelect>
                                )
                            }

                            throw new Error(`Type ${type} is not supported`);
                            
                            
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}