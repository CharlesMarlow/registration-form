import { render, screen } from '@testing-library/react';
import Step from '../../components/shared/Step';
import { formStateMock } from '../mocks/formMocks';

// Mock child components
jest.mock('../../components/PersonalInfo.tsx', () => () => (
  <div>Personal Info Component</div>
));
jest.mock('../../components/FinancialInfo.tsx', () => () => (
  <div>Financial Info Component</div>
));
jest.mock('../../components/Summary.tsx', () => () => (
  <div>Summary Component</div>
));

describe('Step Component', () => {
  const defaultProps = {
    step: 1,
    nextStep: jest.fn(),
    prevStep: jest.fn(),
    register: jest.fn(),
    handleSubmit: jest.fn(),
    errors: {},
    formState: formStateMock, 
    watch: jest.fn(),
  };

  test('renders PersonalInfo component when step is 1', () => {
    render(<Step {...defaultProps} step={1} />);

    expect(screen.getByText('Personal Info Component')).toBeInTheDocument();
  });

  test('renders FinancialInfo component when step is 2', () => {
    render(<Step {...defaultProps} step={2} />);

    expect(screen.getByText('Financial Info Component')).toBeInTheDocument();
  });

  test('renders Summary component when step is 3', () => {
    render(<Step {...defaultProps} step={3} />);

    expect(screen.getByText('Summary Component')).toBeInTheDocument();
  });
});
