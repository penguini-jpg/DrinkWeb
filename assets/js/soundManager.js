/* File: assets/js/soundManager.js
   Title: Sound Manager for DrinkWeb
   Description: Manages background music and sound effects within a scene.
                It can play a background track on loop and play one-shot sound effects.
*/
class SoundManager {
  constructor(scene) {
    this.scene = scene;
    this.currentMusic = null;
  }
  playBackgroundMusic(key) {
    if (this.currentMusic) {
      this.currentMusic.stop();
    }
    let vol = parseFloat(localStorage.getItem("bgMusicVolume"));
    if (isNaN(vol)) { vol = 0.5; }
    this.currentMusic = this.scene.sound.add(key, { loop: true, volume: vol });
    this.currentMusic.play();
  }
  stopBackgroundMusic() {
    if (this.currentMusic) {
      this.currentMusic.stop();
      this.currentMusic = null;
    }
  }
  playSoundEffect(key) {
    this.scene.sound.play(key);
  }
}
window.SoundManager = SoundManager;
