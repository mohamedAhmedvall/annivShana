/**
 * Music Player Module
 * Manages background music playback
 */

export class MusicPlayer {
  /**
   * @param {string} audioId - ID of the audio element
   * @param {string} buttonId - ID of the toggle button
   */
  constructor(audioId = 'bg-music', buttonId = 'music-toggle') {
    this.audio = document.getElementById(audioId);
    this.button = document.getElementById(buttonId);
    this.isPlaying = false;

    this.init();
  }

  /**
   * Initialize event listeners
   */
  init() {
    this.button.addEventListener('click', () => this.toggle());

    // Handle audio errors gracefully
    this.audio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      this.button.disabled = true;
      this.button.innerHTML = '<i class="fas fa-volume-mute"></i> <span>Indisponible</span>';
    });
  }

  /**
   * Toggle music playback
   */
  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Play music
   */
  play() {
    this.audio.play().catch((error) => {
      console.error('Playback error:', error);
    });
    this.isPlaying = true;
    this.updateButton();
  }

  /**
   * Pause music
   */
  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updateButton();
  }

  /**
   * Update button display
   */
  updateButton() {
    if (this.isPlaying) {
      this.button.innerHTML = '<i class="fas fa-pause"></i> <span>Pause</span>';
    } else {
      this.button.innerHTML = '<i class="fas fa-play"></i> <span>Musique</span>';
    }
  }

  /**
   * Set volume (0 to 1)
   * @param {number} volume
   */
  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }
}
