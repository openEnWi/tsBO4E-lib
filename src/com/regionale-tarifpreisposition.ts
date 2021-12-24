import {Preistyp} from 'enum/preistyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {RegionalePreisstaffel} from 'com/regionale-preisstaffel';

/**
 * Mit dieser Komponente können Tarifpreise verschiedener Typen
 * im Zusammenhang mit regionalen Gültigkeiten abgebildet werden.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM RegionaleTarifpreisposition](https://www.bo4e.de/dokumentation/komponenten/com-regionaletarifpreisposition)
 */
export class RegionaleTarifpreisposition {
  /**
   * Constructor.
   *
   * @param {Preistyp} preistyp
   * @param {Waehrungseinheit} einheit
   * @param {Mengeneinheit} bezugseinheit
   * @param {Set<RegionalePreisstaffel>} preisstaffeln
   * @param {Mengeneinheit} mengeneinheitstaffel
   */
  constructor(public preistyp: Preistyp,
              public einheit: Waehrungseinheit,
              public bezugseinheit: Mengeneinheit,
              public preisstaffeln: Set<RegionalePreisstaffel>,
              public mengeneinheitstaffel?: Mengeneinheit) {
  }
}
