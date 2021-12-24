import {Mengeneinheit} from 'enum/mengeneinheit.enum';

/**
 * Abbildung einer Menge mit Wert und Einheit.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Menge](https://www.bo4e.de/dokumentation/komponenten/com-menge)
 */
export class Menge {
  /**
   * Constructor.
   *
   * @param {number} wert Wert der Menge
   * @param {Mengeneinheit} einheit Einheit der Menge
   */
  constructor(public wert: number, public einheit: Mengeneinheit) {
  }
}
