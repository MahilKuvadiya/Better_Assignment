import React from 'react';
import { calculatePasswordStrength } from '../../hooks/usePasswordStrength'; 

interface Props {
  password: string;
}

const PasswordStrengthMeter: React.FC<Props> = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db']; 

  return (
    <div className="password-strength-meter">
      <div
        className="strength-bar"
        style={{
          width: `${strength >= 4 ?   100 :(strength / (strengthLabels.length - 1)) * 100}%`,
          backgroundColor: strength >= 4 ? colors[4] : colors[strength],
          height: '8px',
          borderRadius: '4px',
          transition: 'width 0.3s ease, background-color 0.3s ease',
        }}
      ></div>

      {password && (
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 'bold',
            color: strength >= 4 ? colors[4] : colors[strength],
            marginTop: '5px',
            textAlign: 'left',
          }}
        >
          { strength >= 4 ? strengthLabels[4] : strengthLabels[strength]}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
