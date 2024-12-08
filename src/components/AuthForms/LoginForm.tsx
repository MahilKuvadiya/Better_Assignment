import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { saveToLocalStorage, getEmailFromLocalStorage, getPasswordFromLocalStorage } from '../../utils/storage';
import { get } from 'http';

const LoginForm: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Fetch the remembered email from local storage when the component loads
  useEffect(() => {
    const rememberedEmail = getEmailFromLocalStorage();
    const rememberedPassword = getPasswordFromLocalStorage();
      setInitialValues({
        email: rememberedEmail || '',
        password: rememberedPassword ||'',
        rememberMe: true,
      });
    
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    if (values.rememberMe) {
      saveToLocalStorage('rememberedEmail', values.email);
      saveToLocalStorage('rememberedPassword', values.password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }
    alert('Login Successful');
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      {/* Only render the form when initialValues are ready */}
      {initialValues.email !== '' || initialValues.rememberMe || true ? (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize >
          {({ setFieldValue }) => (
            <Form>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" aria-required="true"  />
              <ErrorMessage name="email" component="div" className="error" />

              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" aria-required="true" />
              <ErrorMessage name="password" component="div" className="error" />

              <div>
                <Field
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('rememberMe', e.target.checked);
                  }}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
      ) : (
        <p>Loading...</p> // Optional loading state if fetching values takes time
      )}
    </div>
  );
};

export default LoginForm;
