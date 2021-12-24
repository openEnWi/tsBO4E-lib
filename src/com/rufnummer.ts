import {Rufnummernart} from 'enum/rufnummerart.enum';

/**
 * Abbildung von Rufnummern.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Rufnummer](https://www.bo4e.de/dokumentation/komponenten/com-rufnummer)
 */
export class Rufnummer {
  /**
   * Constructor.
   *
   * @param {Rufnummernart} nummertyp
   * @param {string} rufnummer
   */
  constructor(public nummertyp: Rufnummernart, rufnummer: string) {
  }
}
