import { render, screen, fireEvent } from '@testing-library/react';
import PersonalInfo from '../../components/PersonalInfo';

describe('PersonalInfo Component', () => {
  const nextStepMock = jest.fn();

  const setup = (errors = {}) => {
    const mockRegister = jest.fn();
    const handleSubmit = jest.fn((fn) => fn);

    const utils = render(
      <PersonalInfo
        nextStep={nextStepMock}
        register={mockRegister}
        errors={errors}
        handleSubmit={handleSubmit}
      />
    );

    return { ...utils, nextStepMock, handleSubmit };
  };

  it('renders the form with input fields', () => {
    setup();

    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number:/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    setup({
      fullName: { message: 'First and last name are required' },
      email: { message: 'Email is required' },
      phone: { message: 'Phone number is required' },
    });

    expect(
      screen.getByText(/First and last name are required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  });

  it('disables the Next button if there are errors', () => {
    setup({
      fullName: { message: 'First and last name are required' },
    });

    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).toBeDisabled();
  });

  it('calls nextStep when the form is submitted successfully', () => {
    setup();

    const fullNameInput = screen.getByLabelText(/Full Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const phoneInput = screen.getByLabelText(/Phone Number:/i);

    // Simulate form responses
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(nextStepMock).toHaveBeenCalled();
  });
});
