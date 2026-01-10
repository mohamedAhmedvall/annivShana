/**
 * Countdown Timer Module
 * Manages the birthday countdown display
 */

import { BIRTHDAY_DATE } from '../utils/constants.js';

export class Countdown {
  /**
   * @param {string} containerId - ID of the countdown container element
   */
  constructor(containerId = 'countdown-container') {
    this.container = document.getElementById(containerId);
    this.elements = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      mins: document.getElementById('mins'),
      secs: document.getElementById('secs'),
    };
    this.targetDate = new Date(BIRTHDAY_DATE).getTime();
    this.intervalId = null;
  }

  /**
   * Initialize and start the countdown
   */
  init() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  /**
   * Update countdown display
   */
  update() {
    const now = new Date().getTime();
    const diff = this.targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      this.elements.days.textContent = String(days).padStart(2, '0');
      this.elements.hours.textContent = String(hours).padStart(2, '0');
      this.elements.mins.textContent = String(mins).padStart(2, '0');
      this.elements.secs.textContent = String(secs).padStart(2, '0');
    } else {
      this.showBirthdayMessage();
      this.stop();
    }
  }

  /**
   * Show birthday celebration message
   */
  showBirthdayMessage() {
    this.container.innerHTML = "<h2>🎉 C'est le JOUR J ! 🎉</h2>";
  }

  /**
   * Stop the countdown
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Cleanup
   */
  destroy() {
    this.stop();
  }
}
