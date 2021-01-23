/**
 * Validate user email and password
 * @param {Formik values} values
 *
 */
export const validateRegistration = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Password & Confirm password should match';
  }

  return errors;
};
