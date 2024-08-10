import React from 'react';
import { SlotReel } from './SlotReel';
import { SpinButton } from './SpinButton';

interface SlotMachineProps {
  colors: number[];
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ colors }) => {
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
          width: '360px', // 120px per reel for 3 reels
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
        id="spin-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <SpinButton />
      </div>
    </div>
  );
};
