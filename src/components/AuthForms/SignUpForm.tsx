import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthMeter from '../UI/PasswordStrengthMeter';
import { saveToLocalStorage } from '../../utils/storage';

const SignUpForm: React.FC = () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    alert('Sign Up Successful');
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" aria-required="true" />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" aria-required="true" />
            <PasswordStrengthMeter password={values.password} />
            <ErrorMessage name="password" component="div" className="error" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" aria-required="true" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />

            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
