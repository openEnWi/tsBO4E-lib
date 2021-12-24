import {Geraetetyp} from 'enum/geraetetyp.enum';
import {Geraetemerkmal} from 'enum/geraetemerkmal.enum';

/**
 * Mit dieser Komponente werden die Eigenschaften eines Gerätes in Bezug auf den Typ und weitere Merkmale modelliert.
 *
 * veröffentlicht am 18. April 2018
 *
 * @see [COM Geraeteeigenschaften](https://www.bo4e.de/dokumentation/komponenten/com-geraeteeigenschaften)
 */
export class Geraeteeigenschaften {
  /**
   * Constructor.
   *
   * @param {Geraetetyp} geraetetyp Typ des Gerätes.
   * @param {Geraetemerkmal} geraetemerkmal Merkmal des Gerätes.
   */
  constructor(public geraetetyp: Geraetetyp, public geraetemerkmal: Geraetemerkmal) {
  }
}
