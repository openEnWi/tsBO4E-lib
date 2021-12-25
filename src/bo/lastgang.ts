import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Zeitreihenwert} from 'com/zeitreihenwert';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface ILastgang extends IGeschaeftsobjekt {
  sparte: Sparte;
  lokationsId: string;
  messgroesse: Mengeneinheit;
  werte: Array<Zeitreihenwert>;
  version?: string;
  obiskennzahl?: string;
}

/**
 * Modell zur Abbildung eines Lastganges.
 * In diesem Modell werden die Messwerte mit einem vollständigen Zeitintervall angegeben
 * und es bietet daher eine hohe Flexibilität in der Übertragung jeglicher zeitlich veränderlicher Messgrössen.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [BO Lastgang](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-lastgang)
 */
export class Lastgang extends Geschaeftsobjekt implements ILastgang {
  /**
   * Constructor.
   *
   * @param {Sparte} sparte
   * @param {string} lokationsId
   * @param {Mengeneinheit} messgroesse
   * @param {Array<Zeitreihenwert>} werte
   * @param {string} version
   * @param {string} obiskennzahl
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public sparte: Sparte,
              public lokationsId: string,
              public messgroesse: Mengeneinheit,
              public werte: Array<Zeitreihenwert>,
              public version?: string,
              public obiskennzahl?: string,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.LASTGANG);
  }
}
