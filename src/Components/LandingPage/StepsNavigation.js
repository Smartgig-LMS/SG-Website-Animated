import React, { useState } from 'react';

const StepsNavigation = ({ steps, initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goToStep = stepIndex => {
    setCurrentStep(stepIndex);
  };

  const goToNextStep = () => {
    setCurrentStep(prevStep => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const goToPrevStep = () => {
    setCurrentStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <div>
        <h2>Step {currentStep + 1}</h2>
        {steps[currentStep]}
      </div>
      <div>
        <button onClick={goToPrevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={goToNextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
      <div>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              <button onClick={() => goToStep(index)} disabled={index === currentStep}>
                Step {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepsNavigation;
