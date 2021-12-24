import {Preistyp} from 'enum/preistyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Preisstaffel} from 'com/preisstaffel';


/**
 * Mit dieser Komponente können Tarifpreise verschiedener Typen abgebildet werden.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Tarifpreisposition](https://www.bo4e.de/dokumentation/komponenten/com-tarifpreisposition)
 */
export class Tarifpreisposition {
  /**
   * Constructor.
   *
   * @param {Preistyp} preistyp
   * @param {Waehrungseinheit} einheit
   * @param {Mengeneinheit} bezugseinheit
   * @param {Array<Preisstaffel>} preisstaffeln
   * @param {Mengeneinheit} mengeneinheitstaffel
   */
  constructor(public preistyp: Preistyp,
              public einheit: Waehrungseinheit,
              public bezugseinheit: Mengeneinheit,
              public preisstaffeln: Array<Preisstaffel>,
              public mengeneinheitstaffel?: Mengeneinheit) {
  }
}
