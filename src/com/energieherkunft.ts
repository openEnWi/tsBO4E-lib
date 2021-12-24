import {Erzeugungsart} from 'enum/erzeugungsart.enum';

/**
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Energieherkunft(https://www.bo4e.de/dokumentation/komponenten/com-energieherkunft)
 */
export class Energieherkunft {
  /**
   * Constructor.
   *
   * @param {Erzeugungsart} erzeugungsart Art der Erzeugung der Energie.
   * @param {number} anteilProzent Prozentualer Anteil der jeweiligen Erzeugungsart.
   */
  constructor(public erzeugungsart: Erzeugungsart, public anteilProzent: number) {
  }
}
