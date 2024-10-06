import { FC } from 'react';
import {
  FieldErrors,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { FormValues } from '../types';
import NavigationButtons from './shared/NavigationButtons';
import '../App.css';

interface FinancialInfoProps {
  nextStep: () => void;
  prevStep: () => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  formState: FormState<FormValues>;
}

const FinancialInfo: FC<FinancialInfoProps> = ({
  nextStep,
  prevStep,
  register,
  errors,
  handleSubmit,
  formState,
}) => {
  const onSubmit = () => nextStep();

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='title'>Financial Information</h2>

        <label>
          <h3>Salary Range:</h3>
          <div>
            <label>
              <input
                type='radio'
                value='0 - 1.000'
                {...register('salaryRange')}
              />
              0 - 1.000€
            </label>
            <label>
              <input
                type='radio'
                value='1.000 - 2.000'
                {...register('salaryRange')}
              />
              1.000 - 2.000€
            </label>
            <label>
              <input
                type='radio'
                value='2.000 - 3.000'
                {...register('salaryRange')}
              />
              2.000 - 3.000€
            </label>
            <label>
              <input
                type='radio'
                value='3.000 - 4.000'
                {...register('salaryRange')}
              />
              3.000 - 4.000€
            </label>
            <label>
              <input type='radio' value='4.000+' {...register('salaryRange')} />
              More than 4.000€
            </label>
          </div>
          {errors.salaryRange && (
            <p className='error'>{errors.salaryRange.message as string}</p>
          )}
        </label>

        <NavigationButtons
          prevStep={prevStep}
          nextStep={nextStep}
          backType='button'
          nextType='submit'
          isNextDisabled={!formState.isValid}
        />
      </form>
    </div>
  );
};

export default FinancialInfo;
