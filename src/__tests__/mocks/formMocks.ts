import { FieldErrors, FormState } from 'react-hook-form';
import { FormValues } from '../../types';

const errors: FieldErrors<FormValues> = {};

// formState object mock
export const formStateMock: FormState<FormValues> = {
  isDirty: false,
  isValid: true,
  isSubmitting: false,
  isSubmitted: false,
  isSubmitSuccessful: false,
  isLoading: false,
  disabled: false,
  submitCount: 0,
  errors,
  touchedFields: {},
  dirtyFields: {},
  isValidating: false,
  validatingFields: {},
};
