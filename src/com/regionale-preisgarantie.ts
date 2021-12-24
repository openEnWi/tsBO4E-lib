import {Preisgarantietyp} from 'enum/preisgarantietyp.enum';
import {Zeitraum} from 'com/zeitraum';
import {RegionaleGueltigkeit} from 'com/regionale-gueltigkeit';

/**
 * Abbildung einer Preisgarantie mit regionaler Abgrenzung.
 *
 * veröffentlicht am 20. Juni 2018
 *
 * @see [COM RegionalePreisgarantie](https://www.bo4e.de/dokumentation/komponenten/com-regionalepreisgarantie)
 *
 * @see Preisgarantie
 */
export class RegionalePreisgarantie {
  /**
   * Constructor.
   *
   * @param {Preisgarantietyp} preisgarantietyp
   * @param {Zeitraum} zeitlicheGueltigkeit
   * @param {RegionaleGueltigkeit} regionaleGueltigkeit
   * @param {string} beschreibung
   */
  constructor(public preisgarantietyp: Preisgarantietyp,
              public zeitlicheGueltigkeit: Zeitraum,
              public regionaleGueltigkeit: RegionaleGueltigkeit,
              public beschreibung?: string) {
  }
}
