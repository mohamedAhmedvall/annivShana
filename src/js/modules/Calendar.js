/**
 * Calendar Module
 * Manages the advent calendar functionality
 */

import { CALENDAR_START_DAY, CALENDAR_END_DAY, GIFTS, BIRTHDAY_MONTH } from '../utils/constants.js';
import { Modal } from './Modal.js';

export class Calendar {
  /**
   * @param {string} containerId - ID of the calendar container
   */
  constructor(containerId = 'calendar') {
    this.container = document.getElementById(containerId);
    this.modal = new Modal();
    this.startDay = CALENDAR_START_DAY;
    this.endDay = CALENDAR_END_DAY;
    this.gifts = GIFTS;

    // Get current date for validation
    const now = new Date();
    this.currentDay = now.getDate();
    this.currentMonth = now.getMonth() + 1;

    this.init();
  }

  /**
   * Initialize calendar
   */
  init() {
    this.render();
    this.loadOpenedDays();
  }

  /**
   * Render calendar days
   */
  render() {
    this.container.innerHTML = '';

    for (let day = this.startDay; day <= this.endDay; day++) {
      const dayBox = this.createDayBox(day);
      this.container.appendChild(dayBox);
    }
  }

  /**
   * Create a single day box element
   * @param {number} day - Day number
   * @returns {HTMLElement}
   */
  createDayBox(day) {
    const box = document.createElement('div');
    box.className = 'day-box';
    box.dataset.day = day;

    // Special styling for birthday day
    const isBirthdayDay = day === this.endDay;
    if (isBirthdayDay) {
      box.classList.add('special-day');
    }

    // Create day number display
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = isBirthdayDay ? '🎂' : day;
    box.appendChild(dayNumber);

    // Add click handler
    box.addEventListener('click', () => this.handleDayClick(day, box));

    // Add keyboard support for accessibility
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');
    box.setAttribute('aria-label', `Jour ${day}`);
    box.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.handleDayClick(day, box);
      }
    });

    return box;
  }

  /**
   * Handle day box click
   * @param {number} day - Day number
   * @param {HTMLElement} box - Day box element
   */
  handleDayClick(day, box) {
    // Check if already opened
    if (box.classList.contains('opened')) {
      return;
    }

    // Validation: Check if it's December
    if (this.currentMonth !== BIRTHDAY_MONTH) {
      alert('Attends Décembre ! ❄️');
      return;
    }

    // Validation: Check if day has arrived
    if (day > this.currentDay) {
      alert(`Patience... C'est pour le ${day} ! 🤫`);
      return;
    }

    // Open the day
    this.openDay(day, box);
  }

  /**
   * Open a specific day
   * @param {number} day - Day number
   * @param {HTMLElement} box - Day box element
   */
  openDay(day, box) {
    const giftIndex = day - this.startDay;
    const gift = this.gifts[giftIndex];
    const isBirthdayDay = day === this.endDay;

    const title = isBirthdayDay ? 'Joyeux Anniversaire !' : `Surprise du ${day}`;

    // Show modal
    this.modal.open(title, gift, true);

    // Mark as opened
    box.classList.add('opened');
    box.setAttribute('aria-disabled', 'true');

    // Save to localStorage
    this.saveOpenedDay(day);
  }

  /**
   * Save opened day to localStorage
   * @param {number} day
   */
  saveOpenedDay(day) {
    const opened = this.getOpenedDays();
    if (!opened.includes(day)) {
      opened.push(day);
      localStorage.setItem('openedDays', JSON.stringify(opened));
    }
  }

  /**
   * Get list of opened days from localStorage
   * @returns {number[]}
   */
  getOpenedDays() {
    const stored = localStorage.getItem('openedDays');
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Load and mark previously opened days
   */
  loadOpenedDays() {
    const openedDays = this.getOpenedDays();
    openedDays.forEach((day) => {
      const box = this.container.querySelector(`[data-day="${day}"]`);
      if (box) {
        box.classList.add('opened');
        box.setAttribute('aria-disabled', 'true');
      }
    });
  }

  /**
   * Reset calendar (clear opened days)
   */
  reset() {
    localStorage.removeItem('openedDays');
    const openedBoxes = this.container.querySelectorAll('.opened');
    openedBoxes.forEach((box) => {
      box.classList.remove('opened');
      box.removeAttribute('aria-disabled');
    });
  }
}
