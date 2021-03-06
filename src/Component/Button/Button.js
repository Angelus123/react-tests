import { useState } from 'react';

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
      <button type="button" data-testid="button" onClick={() => setShowAnotherButton(true)}>
        Click Here
      </button>
      {showAnotherButton && <button type="button" data-testid="button">Click Here</button>}
    </div>
  );
};
export default Button;
