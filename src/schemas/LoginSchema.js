import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack'
import * as yup from 'yup'

export const LoginSchemaValidator = yup.object().shape({
    email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter the email!'),
    password: yup
    .string()
    .min(6,({min})=>`must have atleast ${min} characters`)
    .required('Please enter the password!'),
});