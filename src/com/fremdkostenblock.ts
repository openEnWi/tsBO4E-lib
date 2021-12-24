import {Betrag} from 'com/betrag';
import {Fremdkostenposition} from 'com/fremdkostenposition';

/**
 * Komponente zur Abbildung eines Kostenblocks in den Fremdkosten
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM Fremdkostenblock](https://www.bo4e.de/dokumentation/komponenten/com-fremdkostenblock)
 */
export class Fremdkostenblock {
  /**
   * Constructor.
   *
   * @param {string} kostenblockbezeichnung
   * @param {Array<Fremdkostenposition>} kostenpositionen
   * @param {Betrag} summeKostenblock
   */
  constructor(public kostenblockbezeichnung: string,
              public kostenpositionen: Array<Fremdkostenposition>,
              public summeKostenblock?: Betrag) {
  }
}
