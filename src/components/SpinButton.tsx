import React from 'react';

interface SpinButtonProps {
  onSpin: () => void;
}

export const SpinButton: React.FC<SpinButtonProps> = ({ onSpin }) => {
  return (
    <button
      onClick={onSpin}
      style={{
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      Spin
    </button>
  );
};
