import { FC } from 'react';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { FormValues } from '../types';
import NavigationButtons from './shared/NavigationButtons';
import '../App.css';

interface PersonalInfoProps {
  nextStep: () => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<FormValues>;
}

const PersonalInfo: FC<PersonalInfoProps> = ({
  nextStep,
  register,
  errors,
  handleSubmit,
}) => {
  const isNextDisabled = Object.keys(errors).length > 0;
  const onSubmit = () => nextStep();

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='title'>Personal Information</h2>

        <label>
          Full Name:
          <input
            type='text'
            {...register('fullName', {
              required: 'First and last name are required',
            })}
          />
          {errors.fullName && (
            <p className='error'>{errors.fullName.message as string}</p>
          )}
        </label>

        <label>
          Email:
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format. Pleasew follow: x@y.z',
              },
            })}
          />
          {errors.email && (
            <p className='error'>{errors.email.message as string}</p>
          )}
        </label>

        <label>
          Phone Number:
          <input
            type='tel'
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phone && (
            <p className='error'>{errors.phone.message as string}</p>
          )}
        </label>

        <NavigationButtons
          nextStep={handleSubmit(onSubmit)}
          nextType='submit'
          isNextDisabled={isNextDisabled}
          error={isNextDisabled}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
