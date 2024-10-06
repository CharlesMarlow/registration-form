import { useState, CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import Step from './components/shared/Step';
import AnimatedStep from './components/shared/AnimatedPresence';
import { FormValues } from './types';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Initialize form-control
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    formState,
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      salaryRange: '0 - 1.000',
    },
  });

  // Animation setup
  const transition = { duration: 0.5 };
  const animationStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  };
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className='form-wrapper'>
      <div className={`progress-bar-container progress-step-${step}`}>
        <div className='progress-bar-fill'></div>
      </div>

      <div className='form-container'>
        <AnimatePresence mode='wait'>
          <AnimatedStep
            stepKey={`step-${step}`}
            variants={pageVariants}
            transition={transition}
            style={animationStyle}
          >
            <Step
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              formState={formState}
              watch={watch}
            />
          </AnimatedStep>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
