import {Gueltigkeitstyp} from 'enum/gueltigkeitstyp.enum';
import {Regionskriteriumtyp} from 'enum/regionskriteriumtyp.enum';

/**
 * Komponente zur Abbildung eines Regionskriteriums.
 *
 * veröffentlicht am 22. August 2018
 *
 * @see [COM Regionskriterium](https://www.bo4e.de/dokumentation/komponenten/com-regionskriterium)
 */
export class Regionskriterium {
  /**
   * Constructor.
   *
   * @param {Gueltigkeitstyp} gueltigkeitstyp
   * @param {Regionskriteriumtyp} regionskriteriumtyp
   * @param {string} wert
   */
  constructor(public gueltigkeitstyp: Gueltigkeitstyp,
              public regionskriteriumtyp: Regionskriteriumtyp,
              public wert: string) {

  }
}
