import React, { useState } from 'react';
import { SlotReel } from './SlotReel';
import { SpinButton } from './SpinButton';

interface SlotMachineProps {
  colors: number[];
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ colors }) => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [bet, setBet] = useState(100); // Initial bet amount
  const [score, setScore] = useState(0); // Initial score

  const handleSpin = () => {
    if (balance >= bet) {
      setBalance(balance - bet);
      const event = new Event('spin');
      window.dispatchEvent(event);

      // Simulate checking for a win after the spin (adjust the timing to match your animation duration)
      setTimeout(() => {
        const result = checkForWin(); // Implement this function to check if the player has won
        if (result) {
          const winnings = bet * 10; // Example win multiplier
          setScore(score + winnings);
          setBalance(balance + winnings);
        }
      }, 2000); // 2 seconds, matching the spin duration
    } else {
      alert('Not enough balance to spin');
    }
  };

  const checkForWin = (): boolean => {
    // Implement the logic to check if the symbols align in a winning combination
    // Return true if the player wins, false otherwise
    // For simplicity, you could check if all symbols in a row or column are the same
    return Math.random() > 0.7; // 30% chance of winning
  };

  const handleBetChange = (amount: number) => {
    if (amount > 0 && amount <= balance) {
      setBet(amount);
    } else {
      alert('Invalid bet amount');
    }
  };

  return (
    <div
      id="game-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1E1E1E',
        padding: '20px',
      }}
    >
      <div
        id="slot-machine-window"
        style={{
          width: '360px',
          height: '300px',
          backgroundColor: '#333',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <div
          id="slot-machine"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <SlotReel colors={colors} />
          <SlotReel colors={colors} />
          <SlotReel colors={colors} />
        </div>
      </div>

      <div
        id="betting-controls"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div>
          <label style={{ color: '#fff', marginRight: '10px' }}>Bet Amount:</label>
          <input
            type="number"
            value={bet}
            onChange={(e) => handleBetChange(parseInt(e.target.value))}
            style={{ padding: '5px', borderRadius: '5px', width: '100px' }}
          />
        </div>
        <div style={{ color: '#fff', marginTop: '10px' }}>Balance: ${balance}</div>
        <div style={{ color: '#fff', marginTop: '10px' }}>Score: {score} points</div>
      </div>

      <div
        id="spin-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <SpinButton onSpin={handleSpin} />
      </div>
    </div>
  );
};
