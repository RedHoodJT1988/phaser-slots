import React, { useEffect } from 'react';
import Phaser from 'phaser';

interface SlotReelProps {
  colors: number[]; 
}

export const SlotReel: React.FC<SlotReelProps> = ({ colors }) => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 150, // Adjusted width to accommodate larger images
      height: 400, // Adjusted height to accommodate larger images
      backgroundColor: '#333',
      scene: {
        preload: preloadReel,
        create: createReel,
      },
    };

    const reelGame = new Phaser.Game(config);

    function preloadReel(this: Phaser.Scene) {
      this.load.image('orange', 'assets/sprites/orange.png');
      this.load.image('lemon', 'assets/sprites/lemon.png');
      this.load.image('cherry', 'assets/sprites/cherry.png');
    }

    function createReel(this: Phaser.Scene) {
      const symbols = ['orange', 'lemon', 'cherry'];
      const sprites: Phaser.GameObjects.Image[] = [];
      const numSymbols = 3;

      for (let i = 0; i < numSymbols; i++) {
        const sprite = this.add.image(
          75, // Center X (adjusted for larger images)
          100 * i + 75, // Position in column (adjusted for larger images)
          symbols[Phaser.Math.Between(0, symbols.length - 1)] 
        );
        sprite.setScale(1.5); // Scale the images up by 1.5 times
        sprites.push(sprite);
      }

      // Spin Animation
      const startSpin = () => {
        sprites.forEach((sprite) => {
          this.tweens.add({
            targets: sprite,
            y: `+=${300}`, // Move down by the total height of the reel
            duration: 100,
            repeat: -1, // Infinite repeat
            onUpdate: () => {
              if (sprite.y > 400) {
                sprite.y = sprite.y - 300; // Move the symbol back to the top
                sprite.setTexture(symbols[Phaser.Math.Between(0, symbols.length - 1)]);
              }
            },
          });
        });
      }

      // Stop the spin after a set duration
      const stopSpin = () => {
        this.tweens.killAll();
        sprites.forEach((sprite, index) => {
          sprite.y = 100 * index + 75;
        });
      }

      window.addEventListener('spin', () => {
        startSpin.call(this);

        setTimeout(() => {
          stopSpin.call(this);
        }, 2000);
      });
    }

    return () => {
      reelGame.destroy(true);
    };
  }, [colors]);

  return <div id="slot-reel" />;
};
