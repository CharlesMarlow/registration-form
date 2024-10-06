import { FC } from 'react';
import {
  UseFormWatch,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  FormState,
} from 'react-hook-form';
import { FormValues } from '../../types';
import FinancialInfo from '../FinancialInfo';
import PersonalInfo from '../PersonalInfo';
import Summary from '../Summary';

interface StepProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  watch: UseFormWatch<FormValues>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  errors: FieldErrors;
  formState: FormState<FormValues>;
}

const Step: FC<StepProps> = ({
  step,
  nextStep,
  prevStep,
  register,
  handleSubmit,
  errors,
  formState,
  watch,
}) => {
  switch (step) {
    case 1:
      return (
        <PersonalInfo
          nextStep={nextStep}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      );
    case 2:
      return (
        <FinancialInfo
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          formState={formState}
        />
      );
    case 3:
      return <Summary prevStep={prevStep} formData={watch()} />;
  }
};

export default Step;
