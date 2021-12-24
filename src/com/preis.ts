import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Preisstatus} from 'enum/preisstatus.enum';

/**
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Preis](https://www.bo4e.de/dokumentation/komponenten/com-preis)
 */
export class Preis {
  /**
   * Constructor.
   *
   * @param {number} wert Wert des Preises
   * @param {Waehrungseinheit} einheit Einheit des Preises
   * @param {Mengeneinheit} bezugswert Bezugswert des Preises
   * @param {Preisstatus} status Status des Preises (optional)
   */
  constructor(public wert: number,
              public einheit: Waehrungseinheit,
              public bezugswert: Mengeneinheit,
              public status?: Preisstatus) {
  }
}
