/* File: assets/js/globalAudio.js
   Title: Global Audio Manager for DrinkWeb
   Description: Plays the global background music ("DrinkHouse.wav") on loop
                on global pages (index, settings, game-home, players-edit) at default 50% volume.
*/
(function() {
  let bgMusic = document.getElementById("bg-music");
  if (!bgMusic) {
    bgMusic = document.createElement("audio");
    bgMusic.id = "bg-music";
    // Global audio now resides in audio/global/music/
    bgMusic.src = "../audio/global/music/DrinkHouse.wav";
    bgMusic.loop = true;
    let volume = parseFloat(localStorage.getItem("bgMusicVolume"));
    if (isNaN(volume)) volume = 0.5;
    bgMusic.volume = volume;
    document.body.appendChild(bgMusic);
  }
  bgMusic.play().catch(err => console.error("Global background music playback failed:", err));
})();
