import { render, screen, fireEvent } from '@testing-library/react';
import FinancialInfo from '../../components/FinancialInfo';
import { FieldErrors, FieldError } from 'react-hook-form';
import { FormValues } from '../../types';
import { formStateMock } from '../mocks/formMocks';

describe('FinancialInfo Component', () => {
  const nextStepMock = jest.fn();
  const prevStepMock = jest.fn();

  const setup = (
    errors: FieldErrors<FormValues> = {},
    isValid: boolean = true
  ) => {
    const mockRegister = jest.fn();
    const handleSubmit = jest.fn();

    const formState = {
      ...formStateMock,
      isValid,
      errors,
    };
    // const formState: FormState<FormValues> = {
    //   isDirty: false,
    //   isValid: isValid,
    //   isSubmitting: false,
    //   isSubmitted: false,
    //   isSubmitSuccessful: false,
    //   isLoading: false,
    //   disabled: false,
    //   submitCount: 0,
    //   errors,
    //   touchedFields: {},
    //   dirtyFields: {},
    //   isValidating: false,
    //   validatingFields: {},
    // };

    const utils = render(
      <FinancialInfo
        nextStep={nextStepMock}
        prevStep={prevStepMock}
        register={mockRegister}
        errors={errors}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    );

    return { ...utils, nextStepMock, prevStepMock, handleSubmit };
  };

  it('renders the form with radio buttons', () => {
    setup();

    expect(screen.getByText(/Financial Information/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Salary Range:/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty salary range', () => {
    setup({
      salaryRange: {
        message: 'Salary range is required',
        type: 'required',
      } as FieldError,
    });

    expect(screen.getByText(/Salary range is required/i)).toBeInTheDocument();
  });

  it('disables the Next button if the form is invalid', () => {
    setup(
      {
        salaryRange: {
          message: 'Salary range is required',
          type: 'required',
        } as FieldError,
      },
      // Pass false to simulate an invalid form
      false
    );

    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).toBeDisabled();
  });

  it('calls nextStep when the form is submitted successfully', () => {
    setup();

    // Simulate selection
    fireEvent.click(screen.getByLabelText(/0 - 1.000/i));

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(nextStepMock).toHaveBeenCalled();
  });
});
