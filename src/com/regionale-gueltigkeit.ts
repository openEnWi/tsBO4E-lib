import {Gueltigkeitstyp} from 'enum/gueltigkeitstyp.enum';
import {KriteriumWert} from 'com/kriterium-wert';

/**
 * Mit dieser Komponente können regionale Gültigkeiten,
 * z.B. für Tarife, Zu- und Abschläge und Preise definiert werden.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM RegionaleGueltigkeit](https://www.bo4e.de/dokumentation/komponenten/com-regionalegueltigkeit)
 */
export class RegionaleGueltigkeit {
  /**
   * Constructor.
   *
   * @param {Gueltigkeitstyp} gueltigkeitstyp
   * @param {Set<KriteriumWert>} kriteriumsWerte
   */
  constructor(public gueltigkeitstyp: Gueltigkeitstyp, public kriteriumsWerte: Set<KriteriumWert>) {
  }
}
