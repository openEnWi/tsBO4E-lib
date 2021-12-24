import {Betrag} from 'com/betrag';
import {Kostenposition} from 'com/kostenposition';

/**
 * Mit dieser Komponente werden mehrere Kostenpositionen zusammengefasst.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Kostenblock](https://www.bo4e.de/dokumentation/komponenten/com-kostenblock)
 */
export class Kostenblock {
  /**
   * Constructor.
   *
   * @param {string} kostenblockbezeichnung
   * @param {Array<Kostenposition>} kostenpositionen
   * @param {Betrag} summeKostenblock
   */
  constructor(public kostenblockbezeichnung: string,
              public kostenpositionen: Array<Kostenposition>,
              public summeKostenblock?: Betrag) {
  }
}
