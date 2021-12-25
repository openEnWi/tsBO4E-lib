import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {Lokationstyp} from 'enum/lokationstyp.enum';
import {Zeitintervall} from 'com/zeitintervall';
import {Tagesvektor} from 'com/tagesvektor';

export interface ILastgangkompakt extends IGeschaeftsobjekt {
  sparte: Sparte;
  lokationstyp: Lokationstyp;
  messgroesse: Mengeneinheit;
  zeitintervall: Zeitintervall;
  tagesvektoren: Array<Tagesvektor>;
  version?: string;
  lokationsId?: string;
  obiskennzahl?: string;
}

/**
 * Modell zur Abbildung eines kompakten Lastganges.
 * In diesem Modell werden die Messwerte in Form von Tagesvektoren mit fester Anzahl von Werten übertragen.
 * Daher ist dieses BO nur zur Übertragung von äquidistanten Messwertverläufen geeignet.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [BO Lastgangkompakt](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-lastgangkompakt)
 */
export class Lastgangkompakt extends Geschaeftsobjekt implements ILastgangkompakt {
  /**
   * Constructor.
   *
   * @param {Sparte} sparte
   * @param {Lokationstyp} lokationstyp
   * @param {Mengeneinheit} messgroesse
   * @param {Zeitintervall} zeitintervall
   * @param {Array<Tagesvektor>} tagesvektoren
   * @param {string} version
   * @param {string} lokationsId
   * @param {string} obiskennzahl
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public sparte: Sparte,
              public lokationstyp: Lokationstyp,
              public messgroesse: Mengeneinheit,
              public zeitintervall: Zeitintervall,
              public tagesvektoren: Array<Tagesvektor>,
              public version?: string,
              public lokationsId?: string,
              public obiskennzahl?: string,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.LASTGANG, externeReferenzen);
  }
}
