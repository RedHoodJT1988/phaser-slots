import React from 'react';
import { SlotMachine } from './SlotMachine';

export const SlotGame: React.FC = () => {
  const themes = {
    default: [0xff0000, 0x00ff00, 0x0000ff],
    ocean: [0x1e90ff, 0x00ced1, 0x4682b4],
    fire: [0xff4500, 0xff6347, 0xffd700],
  };

  // For example, you can select a theme based on user choice or some condition
  const selectedTheme = themes.default;

  return (
    <div id="slot-game">
      <SlotMachine colors={selectedTheme} />
    </div>
  );
};
