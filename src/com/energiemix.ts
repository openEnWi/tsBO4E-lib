import {Sparte} from 'enum/sparte.enum';
import {Energieherkunft} from 'com/energieherkunft';
import {Oekozertifikat} from 'enum/oekozertifikat.enum';
import {Oekolabel} from 'enum/oekolabel.enum';

/**
 * Zusammensetzung der gelieferten Energie aus den verschiedenen Primärenergieformen.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Energiemix](https://www.bo4e.de/dokumentation/komponenten/com-energiemix)
 */
export class Energiemix {
  /**
   * Constructor.
   *
   * @param {number} energiemixnummer
   * @param {Sparte} energieart
   * @param {string} bezeichnung
   * @param {number} gueltigkeitsjahr
   * @param {Array<Energieherkunft>} anteil
   * @param {Set<Oekozertifikat>} oekozertifikat
   * @param {Set<Oekolabel>} oekolabel
   * @param {string} bemerkung
   * @param {number} cO2Emmission
   * @param {number} atommuell
   * @param {boolean} oekoTopTen
   * @param {string} webseite
   */
  constructor(public energiemixnummer: number,
              public energieart: Sparte,
              public bezeichnung: string,
              public gueltigkeitsjahr: number,
              public anteil: Array<Energieherkunft>,
              public oekozertifikat: Set<Oekozertifikat>,
              public oekolabel: Set<Oekolabel>,
              public bemerkung?: string,
              public cO2Emmission?: number,
              public atommuell?: number,
              public oekoTopTen?: boolean,
              public webseite?: string,
  ) {
  }
}
