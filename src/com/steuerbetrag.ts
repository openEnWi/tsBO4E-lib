import {Steuerkennzeichen} from 'enum/steuerkennzeichen.enum';
import {Waehrungscode} from 'enum/waehrungscode.enum';

/**
 * Abbildung eines Steuerbetrages.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [COM Steuerbetrag](https://www.bo4e.de/dokumentation/komponenten/com-steuerbetrag)
 */
export class Steuerbetrag {
  /**
   *  Constructor.
   * @param {Steuerkennzeichen} steuerkennzeichen
   * @param {number} basiswert
   * @param {number} steuerwert
   * @param {Waehrungscode} waehrung
   */
  constructor(public steuerkennzeichen: Steuerkennzeichen,
              public basiswert: number,
              public steuerwert: number,
              public waehrung: Waehrungscode) {
  }
}
