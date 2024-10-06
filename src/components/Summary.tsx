import { FC } from 'react';
import { FormValues } from '../types';
import '../App.css';

interface SummaryProps {
  prevStep: () => void;
  formData: FormValues;
}

const Summary: FC<SummaryProps> = ({ prevStep, formData }) => {
  return (
    <>
      <div className='form-container'>
        <h2 className='title'>Summary</h2>
        <div className='summary-content'>
          <h3>Personal Information</h3>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>

          <h3>Financial Information</h3>
          <p>Salary Range: {formData.salaryRange}€</p>
        </div>

        <div className='buttons-container'>
          <button className='back-button' type='button' onClick={prevStep}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Summary;
