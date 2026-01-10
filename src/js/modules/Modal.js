/**
 * Modal Module
 * Manages modal display and interactions
 */

import confetti from 'canvas-confetti';

export class Modal {
  /**
   * @param {string} modalId - ID of the modal element
   */
  constructor(modalId = 'modal') {
    this.modal = document.getElementById(modalId);
    this.titleElement = document.getElementById('modal-title');
    this.messageElement = document.getElementById('modal-message');
    this.closeButton = this.modal.querySelector('.close-btn');

    this.init();
  }

  /**
   * Initialize event listeners
   */
  init() {
    // Close on button click
    this.closeButton.addEventListener('click', () => this.close());

    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  /**
   * Open modal with content
   * @param {string} title - Modal title
   * @param {string} message - Modal message (HTML allowed)
   * @param {boolean} celebrate - Whether to trigger confetti
   */
  open(title, message, celebrate = true) {
    this.titleElement.textContent = title;
    this.messageElement.innerHTML = message;
    this.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    if (celebrate) {
      this.celebrate();
    }

    // Focus management for accessibility
    this.closeButton.focus();
  }

  /**
   * Close modal
   */
  close() {
    this.modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
  }

  /**
   * Check if modal is open
   * @returns {boolean}
   */
  isOpen() {
    return this.modal.style.display === 'flex';
  }

  /**
   * Trigger confetti celebration
   */
  celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff7eb3', '#ff758c', '#ffd700'],
    });

    // Additional burst after a delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);
  }
}
