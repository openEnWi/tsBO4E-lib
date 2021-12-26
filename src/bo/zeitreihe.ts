import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Messgroesse} from 'enum/messgroesse.enum';
import {Messart} from 'enum/messart.enum';
import {Medium} from 'enum/medium.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Wertermittlungsverfahren} from 'enum/wertermittlungsverfahren.enum';
import {Zeitreihenwert} from 'com/zeitreihenwert';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IZeitreihe extends IGeschaeftsobjekt {
  bezeichnung: string;
  messgroesse: Messgroesse;
  messart: Messart;
  medium: Medium;
  einheit: Mengeneinheit;
  werte: Set<Zeitreihenwert>;
  beschreibung?: string;
  version?: string;
  wertherkunft?: Wertermittlungsverfahren;
}

/**
 * Abbildung einer allgemeinen Zeitreihe mit einem Wertvektor.
 * Die Werte können mit wahlfreier zeitlicher Distanz im Vektor abgelegt sein.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [BO Zeitreihe](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-zeitreihe)
 */
export class Zeitreihe extends Geschaeftsobjekt implements IZeitreihe {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Messgroesse} messgroesse
   * @param {Messart} messart
   * @param {Medium} medium
   * @param {Mengeneinheit} einheit
   * @param {Set<Zeitreihenwert>} werte
   * @param {string} beschreibung
   * @param {string} version
   * @param {Wertermittlungsverfahren} wertherkunft
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bezeichnung: string,
              public messgroesse: Messgroesse,
              public messart: Messart,
              public medium: Medium,
              public einheit: Mengeneinheit,
              public werte: Set<Zeitreihenwert>,
              public beschreibung?: string,
              public version?: string,
              public wertherkunft?: Wertermittlungsverfahren,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.ZEITREIHE, externeReferenzen);
  }
}
