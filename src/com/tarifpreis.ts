import {Preistyp} from 'enum/preistyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Preisstatus} from 'enum/preisstatus.enum';

/**
 * veröffentlicht am 26. Juni 2019
 *
 * @see [COM Tarifpreis](https://www.bo4e.de/dokumentation/komponenten/com-tarifpreis)
 * @see Preis
 */
export class Tarifpreis {
  /**
   * Constructor.
   *
   * @param {Preistyp} preistyp
   * @param {number} wert
   * @param {Waehrungseinheit} einheit
   * @param {Mengeneinheit} bezugswert
   * @param {Preisstatus} status
   * @param {string} beschreibung
   */
  constructor(public preistyp: Preistyp,
              public wert: number,
              public einheit: Waehrungseinheit,
              public bezugswert: Mengeneinheit,
              public status?: Preisstatus,
              public beschreibung?: string,
  ) {
  }
}
