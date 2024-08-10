import React from 'react';

export const SpinButton: React.FC = () => {
  const handleSpin = () => {
    // Dispatch the custom event to start spinning
    const event = new Event('spin');
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleSpin}
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
