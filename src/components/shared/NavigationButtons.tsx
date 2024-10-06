import { FC } from 'react';
import { ButtonType } from '../../types';
import '../../App.css';

interface NavigationButtonsProps {
  prevStep?: () => void;
  nextStep: () => void;
  backType?: ButtonType;
  nextType: ButtonType;
  isNextDisabled: boolean;
  error?: boolean;
}

const NavigationButtons: FC<NavigationButtonsProps> = ({
  prevStep,
  nextStep,
  backType = 'button',
  nextType,
  isNextDisabled,
  error = false,
}) => {
  return (
    <section
      className={`buttons-container ${!prevStep ? 'single-button' : ''}`}
    >
      {prevStep && (
        <button className='back-button' type={backType} onClick={prevStep}>
          Back
        </button>
      )}
      <button
        className={`next-button ${error ? 'error-state' : ''}`}
        type={nextType}
        onClick={nextStep}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </section>
  );
};

export default NavigationButtons;
