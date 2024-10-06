import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationButtons from '../components/shared/NavigationButtons';

describe('NavigationButtons Component', () => {
  const mockPrevStep = jest.fn();
  const mockNextStep = jest.fn();

  test('renders only the Next button if prevStep is not provided', () => {
    render(
      <NavigationButtons
        nextStep={mockNextStep}
        nextType='button'
        isNextDisabled={false}
      />
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).not.toBeDisabled();

    // Back button should not render
    const backButton = screen.queryByText('Back');
    expect(backButton).not.toBeInTheDocument();
  });

  test('renders both Back and Next buttons when prevStep is provided', () => {
    render(
      <NavigationButtons
        prevStep={mockPrevStep}
        nextStep={mockNextStep}
        nextType='button'
        isNextDisabled={false}
      />
    );

    // Back and Next buttons should both render
    const backButton = screen.getByText('Back');
    const nextButton = screen.getByText('Next');
    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('disables the Next button when isNextDisabled is true', () => {
    render(
      <NavigationButtons
        nextStep={mockNextStep}
        nextType='button'
        isNextDisabled={true}
      />
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  test('calls nextStep when the Next button is clicked', () => {
    render(
      <NavigationButtons
        nextStep={mockNextStep}
        nextType='button'
        isNextDisabled={false}
      />
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(mockNextStep).toHaveBeenCalledTimes(1);
  });

  test('calls prevStep when the Back button is clicked', () => {
    render(
      <NavigationButtons
        prevStep={mockPrevStep}
        nextStep={mockNextStep}
        nextType='button'
        isNextDisabled={false}
      />
    );

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

    expect(mockPrevStep).toHaveBeenCalledTimes(1);
  });
});
