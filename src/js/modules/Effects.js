/**
 * Visual Effects Module
 * Manages decorative effects like snow, trails, hearts, and Santa
 */

import { throttle } from '../utils/debounce.js';
import {
  SNOWFLAKE_COUNT,
  TRAIL_LIFETIME,
  HEART_LIFETIME,
  HEART_EMOJIS,
  SANTA_IMAGE_URL,
} from '../utils/constants.js';

export class Effects {
  constructor() {
    this.init();
  }

  /**
   * Initialize all effects
   */
  init() {
    this.createSnowfall();
    this.initMouseTrail();
    this.initSanta();
  }

  /**
   * Create falling snowflakes
   */
  createSnowfall() {
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      snowflake.style.opacity = Math.random() * 0.6 + 0.4;
      snowflake.setAttribute('aria-hidden', 'true');
      document.body.appendChild(snowflake);
    }
  }

  /**
   * Initialize mouse trail effect (throttled for performance)
   */
  initMouseTrail() {
    const createTrail = throttle((e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      trail.setAttribute('aria-hidden', 'true');
      document.body.appendChild(trail);

      // Remove after animation
      setTimeout(() => trail.remove(), TRAIL_LIFETIME);
    }, 50); // Throttle to every 50ms for better performance

    document.addEventListener('mousemove', createTrail);
  }

  /**
   * Initialize Santa flying animation
   */
  initSanta() {
    const santaContainer = document.createElement('div');
    santaContainer.className = 'santa-container';
    santaContainer.setAttribute('aria-hidden', 'true');

    const santaImg = document.createElement('img');
    santaImg.src = SANTA_IMAGE_URL;
    santaImg.alt = 'Santa Claus';
    santaImg.loading = 'lazy';

    // Handle image load error
    santaImg.onerror = () => {
      santaContainer.remove();
    };

    santaContainer.appendChild(santaImg);
    document.body.appendChild(santaContainer);
  }
}

/**
 * Love Hearts Effect
 * Separate class for the love button hearts
 */
export class LoveEffect {
  constructor(buttonId = 'love-fab') {
    this.button = document.getElementById(buttonId);
    this.init();
  }

  /**
   * Initialize love button
   */
  init() {
    if (!this.button) return;

    this.button.addEventListener('click', () => this.spawnHeart());

    // Keyboard support
    this.button.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.spawnHeart();
      }
    });
  }

  /**
   * Spawn a flying heart
   */
  spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('flying-heart');
    heart.innerHTML = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    heart.style.right = Math.random() * 100 + 'px';
    heart.setAttribute('aria-hidden', 'true');

    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => heart.remove(), HEART_LIFETIME);

    // Add button feedback
    this.button.style.transform = 'scale(0.9)';
    setTimeout(() => {
      this.button.style.transform = '';
    }, 100);
  }
}

/**
 * Card Flip Effect
 * Manages the 3D flip card interaction
 */
export class CardFlip {
  constructor(cardSelector = '.card') {
    this.card = document.querySelector(cardSelector);
    this.init();
  }

  /**
   * Initialize card flip
   */
  init() {
    if (!this.card) return;

    this.card.addEventListener('click', () => this.flip());

    // Keyboard support
    this.card.setAttribute('tabindex', '0');
    this.card.setAttribute('role', 'button');
    this.card.setAttribute('aria-label', 'Retourner la carte');
    this.card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.flip();
      }
    });
  }

  /**
   * Flip the card
   */
  flip() {
    this.card.classList.toggle('is-flipped');
    const isFlipped = this.card.classList.contains('is-flipped');
    this.card.setAttribute('aria-label', isFlipped ? 'Remettre la carte' : 'Retourner la carte');
  }
}
