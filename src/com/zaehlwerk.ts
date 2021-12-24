import {Energierichtung} from 'enum/energierichtung.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';

/**
 * Mit dieser Komponente werden Zählwerke modelliert.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Zaehlwerk](https://www.bo4e.de/dokumentation/komponenten/com-zahlwerk)
 */
export class Zaehlwerk {
  /**
   * Constructor.
   *
   * @param {string} zaehlwerkId
   * @param {string} bezeichnung
   * @param {Energierichtung} richtung
   * @param {string} obisKennzahl
   * @param {string} wandlerfaktor
   * @param {Mengeneinheit} einheit
   */
  constructor(public zaehlwerkId: string,
              public bezeichnung: string,
              public richtung: Energierichtung,
              public obisKennzahl: string,
              public wandlerfaktor: number,
              public einheit: Mengeneinheit) {
  }
}
