import { render, screen } from '@testing-library/react';
import ProgressBar from '../../components/ProgressBar';

describe('ProgressBar Component', () => {
  it('renders with correct step and totalSteps', () => {
    render(<ProgressBar step={2} totalSteps={5} />);

    // Check step text is displayed correctly
    expect(screen.getByText(/Step 2\/5/i)).toBeInTheDocument();

    const progressBar = screen
      .getByText(/Step 2\/5/i)
      .parentElement?.querySelector('.progress');
    expect(progressBar).toBeInTheDocument();

    // Check for correct width
    expect(progressBar).toHaveStyle('width: 40%');
  });

  it('renders 0% when step is 0', () => {
    render(<ProgressBar step={0} totalSteps={5} />);

    // Check step text is displayed correctly
    expect(screen.getByText(/Step 0\/5/i)).toBeInTheDocument();

    // Check for correct width
    const progressBar = screen
      .getByText(/Step 0\/5/i)
      .parentElement?.querySelector('.progress');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  it('renders 100% when step is equal to totalSteps', () => {
    render(<ProgressBar step={5} totalSteps={5} />);

    // Check step text is displayed correctly
    expect(screen.getByText(/Step 5\/5/i)).toBeInTheDocument();

    const progressBar = screen
      .getByText(/Step 5\/5/i)
      .parentElement?.querySelector('.progress');
    expect(progressBar).toHaveStyle('width: 100%');
  });
});
