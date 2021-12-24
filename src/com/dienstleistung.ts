import {Dienstleistungstyp} from 'enum/dienstleistungstyp.enum';

/**
 * Abbildung einer abrechenbaren Dienstleistung.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Dienstleistung](https://www.bo4e.de/dokumentation/komponenten/com-dienstleistung)
 */
export class Dienstleistung {
  /**
   * Constructor.
   *
   * @param {Dienstleistungstyp} dienstleistungstyp
   * @param {string} bezeichnung
   */
  constructor(public dienstleistungstyp: Dienstleistungstyp, public bezeichnung: string) {
  }
}
