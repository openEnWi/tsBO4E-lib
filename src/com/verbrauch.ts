import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Wertermittlungsverfahren} from 'enum/wertermittlungsverfahren.enum';

/**
 * Abbildung eines zeitlich abgegrenzten Verbrauchs.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Verbrauch](https://www.bo4e.de/dokumentation/komponenten/com-verbrauch)
 */
export class Verbrauch {
  /**
   * Constructor.
   *
   * @param {Date} startdatum
   * @param {Date} enddatum
   * @param {Wertermittlungsverfahren} wertermittlungsverfahren
   * @param {string} obiskennzahl
   * @param {number} wert
   * @param {Mengeneinheit} einheit
   */
  constructor(public startdatum: Date,
              public enddatum: Date,
              public wertermittlungsverfahren: Wertermittlungsverfahren,
              public obiskennzahl: string,
              public wert: number,
              public einheit: Mengeneinheit) {
  }
}
