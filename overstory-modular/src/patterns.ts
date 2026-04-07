import { EventBus } from './events';

/**
 * Projectile: Defines a single unit of danger in a Bullet-Hell pattern.
 */
export interface Projectile {
  type: 'circle' | 'line' | 'star';
  startX: number;
  startY: number;
  speed: number;
  angle: number;
  damage: number;
}

/**
 * AttackPattern: A modular collection of projectiles that define an enemy's turn.
 *
 * Instead of 10+ different "Bullet" sprites in Scratch, we now have data-driven
 * patterns that can be loaded into a single BulletRenderer.
 */
export interface AttackPattern {
  id: string;
  name: string;
  durationSeconds: number;
  projectiles: Projectile[];
}

/**
 * PatternManager: Coordinates the execution of bullet-hell patterns.
 *
 * Perfect for React Native, as it can be hooked into a Game Loop or
 * a simple Frame Timer (like requestAnimationFrame).
 */
export class PatternManager {
  private activePattern: AttackPattern | null = null;
  private patternStartTime: number = 0;

  constructor() {
    /**
     * HOOK: Pattern Activation
     * Listen for turn changes to 'enemy' and load the appropriate pattern.
     */
    EventBus.on('onTurnChange', (turn: 'player' | 'enemy') => {
      if (turn === 'enemy') {
        this.startPattern('zork_circle_attack');
      } else {
        this.stopPattern();
      }
    });
  }

  /**
   * Initializes a new bullet pattern.
   *
   * @param patternId The unique identifier for the enemy's chosen attack.
   */
  public startPattern(patternId: string) {
    // In a real implementation, this would fetch from a database of patterns.
    this.activePattern = this.getPatternById(patternId);
    this.patternStartTime = Date.now();

    console.log(`[PATTERN] Executing pattern: ${this.activePattern?.name}`);
  }

  public stopPattern() {
    this.activePattern = null;
    console.log('[PATTERN] Turn complete. All projectiles cleared.');
  }

  /**
   * Mock pattern registry - replaces the scattered Scratch Bullet sprites.
   */
  private getPatternById(id: string): AttackPattern {
    const patterns: Record<string, AttackPattern> = {
      'zork_circle_attack': {
        id: 'zork_circle_attack',
        name: 'The Sarcastic Circle',
        durationSeconds: 5,
        projectiles: [
          { type: 'circle', startX: 0, startY: 100, speed: 5, angle: 90, damage: 2 },
          { type: 'circle', startX: 0, startY: 100, speed: 5, angle: 180, damage: 2 },
          { type: 'circle', startX: 0, startY: 100, speed: 5, angle: 270, damage: 2 },
          { type: 'circle', startX: 0, startY: 100, speed: 5, angle: 0, damage: 2 }
        ]
      }
    };
    return patterns[id] || patterns['zork_circle_attack'];
  }

  /**
   * Core Update Loop for the Bullet-Hell engine.
   *
   * In React Native, this would be called by the main Game Loop (e.g. at 60fps).
   */
  /**
   * Core Update Loop for the Bullet-Hell engine.
   *
   * In React Native, this would be called by the main Game Loop (e.g. at 60fps).
   */
  public update(deltaTime: number) {
    if (!this.activePattern) return;

    // Calculate movement for each projectile in the active pattern.
    this.activePattern.projectiles.forEach(p => {
      // Logic for moving bullets across the screen based on their angle/speed.
      const rad = (p.angle * Math.PI) / 180;
      p.startX += Math.cos(rad) * p.speed * deltaTime * 60;
      p.startY += Math.sin(rad) * p.speed * deltaTime * 60;
    });

    // Check if the pattern's duration has expired.
    const elapsed = (Date.now() - this.patternStartTime) / 1000;
    if (elapsed >= this.activePattern.durationSeconds) {
      this.stopPattern();
    }
  }
}
