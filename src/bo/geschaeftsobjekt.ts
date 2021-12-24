import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IGeschaeftsobjekt {
  versionStruktur: number;
  boTyp: BoTyp;
  externeReferenzen: Set<ExterneReferenz>;
}

/**
 * Das BO Geschäftsobjekt ist der Master für alle Geschäftsobjekte.
 * Alle Attribute, die hier in diesem BO enthalten sind, werden an alle BOs vererbt.
 *
 * Version 1.1
 * veröffentlicht am 10. Oktober 2020
 *
 * @see [BO Geschaeftsobjekt](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-geschaftsobjekt/10-10-2020)
 */
export class Geschaeftsobjekt implements IGeschaeftsobjekt {
  /**
   * Constructor.
   *
   * @param {BoTyp} boTyp Der Typ des Geschäftsobjektes. Details siehe ENUM BoTyp
   * @param {Set<ExterneReferenz>} externeReferenzen Hier können IDs anderer Systeme hinterlegt werden
   *        (z.B. eine SAP-GP-Nummer)
   * @param {number} versionStruktur Version der BO-Struktur.
   */
  constructor(public boTyp: BoTyp,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>(),
              public versionStruktur: number = 1) {
  }
}
