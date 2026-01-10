/**
 * Main Application Entry Point
 * Initializes all modules and manages application lifecycle
 */

import { Countdown } from './modules/Countdown.js';
import { Calendar } from './modules/Calendar.js';
import { MusicPlayer } from './modules/MusicPlayer.js';
import { Effects, LoveEffect, CardFlip } from './modules/Effects.js';

/**
 * Application Class
 * Orchestrates all application modules
 */
class App {
  constructor() {
    this.modules = {};
    this.init();
  }

  /**
   * Initialize application
   */
  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initModules());
    } else {
      this.initModules();
    }
  }

  /**
   * Initialize all modules
   */
  initModules() {
    try {
      // Initialize countdown timer
      this.modules.countdown = new Countdown();
      this.modules.countdown.init();

      // Initialize calendar
      this.modules.calendar = new Calendar();

      // Initialize music player
      this.modules.musicPlayer = new MusicPlayer();

      // Initialize visual effects
      this.modules.effects = new Effects();
      this.modules.loveEffect = new LoveEffect();
      this.modules.cardFlip = new CardFlip();

      // Expose app to window for debugging (development only)
      if (import.meta.env?.DEV) {
        window.__app__ = this;
      }

      console.log('🎉 Application initialized successfully!');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }

  /**
   * Cleanup and destroy all modules
   */
  destroy() {
    Object.values(this.modules).forEach((module) => {
      if (module && typeof module.destroy === 'function') {
        module.destroy();
      }
    });
    this.modules = {};
  }
}

// Initialize application
const app = new App();

// Export for potential external use
export default app;
