import { render, screen, fireEvent } from '@testing-library/react';
import Summary from '../../components/Summary';
import { FormValues } from '../../types';

describe('Summary Component', () => {
  const prevStepMock = jest.fn();

  const formData: FormValues = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    salaryRange: '0 - 1000',
  };

  const setup = () => {
    render(<Summary prevStep={prevStepMock} formData={formData} />);
  };

  it('renders without crashing', () => {
    setup();
    expect(screen.getByText(/Summary/i)).toBeInTheDocument();
  });

  it('displays personal information correctly', () => {
    setup();

    expect(screen.getByText(/Full Name: John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone: 1234567890/i)).toBeInTheDocument();
  });

  it('displays financial information correctly', () => {
    setup();

    expect(screen.getByText(/Salary Range: 0 - 1000/i)).toBeInTheDocument();
  });

  it('calls prevStep when back button is clicked', () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: /Back/i }));

    expect(prevStepMock).toHaveBeenCalledTimes(1);
  });
});
