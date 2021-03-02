import * as yup from 'yup';
import {jobsFields} from '../../constants/jobs';

const stringRequired = yup.string().required('Field is required');

export const descriptionValidationSchema = () =>
  yup.object().shape({
    [jobsFields.description]: stringRequired,
    [jobsFields.title]: stringRequired,
    [jobsFields.responsibilities]: stringRequired,
  });

export const skillsValidationSchema = () =>
  yup.object().shape({
    [jobsFields.skills]: stringRequired,
  });

export const validateBudget = values => {
  const errors = {};

  if (!values.budget_type) {
    errors.budget_type = 'Field Required';
  }

  if (values.budget_type === jobsFields.fixed_price) {
    if (!values.fixed_price) {
      errors.fixed_price = 'Field Required';
    }
  }

  if (values.budget_type === jobsFields.per_hour) {
    if (!values.min_pay || !values.max_pay) {
      errors.min_pay = 'Min and Max price required';
    }
  }

  return errors;
};

export const validateDuration = values => {
  const errors = {};

  if (!values.duration) {
    errors.duration = 'Duration Field Required';
  }

  if (!values.time) {
    errors.time = 'Time Commitment Field Required';
  }

  return errors;
};
