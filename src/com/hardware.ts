import {Geraetetyp} from 'enum/geraetetyp.enum';

/**
 * Abbildung einer abrechenbaren Hardware.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Hardware]https://www.bo4e.de/dokumentation/komponenten/com-hardware)
 */
export class Hardware {
  /**
   * Constructor.
   *
   * @param {Geraetetyp} geraetetyp
   * @param {string} bezeichnung
   */
  constructor(public geraetetyp: Geraetetyp, public bezeichnung: string) {
  }
}
