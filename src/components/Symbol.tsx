import Phaser from 'phaser';

export class Symbol {
  scene: Phaser.Scene;
  x: number;
  y: number;
  color: number;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  create(): Phaser.GameObjects.Shape {
    return this.scene.add.circle(this.x, this.y, 50, this.color);
  }
}
