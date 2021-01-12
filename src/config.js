import * as yup from 'yup';

// App
export const activeOpacity = 0.6;
export const requestUrl = 'http://193.124.114.46:3001';

// Validating Form
export const initialSignInFields = {
  email: '',
  password: '',
};

export const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().required('Password is required'),
});

export const initialSignUpFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[A-Z]\w*/, 'Password must have at least one capital letter')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>']/,
      'Password must have at least one special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
