import '../App.css';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;
  return (
    <div className='progress-bar-container'>
      <div className='progress-bar'>
        <div
          className='progress'
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className='progress-step-text'>
        Step {step}/{totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
