import {IVertrag} from 'bo/vertrag';
import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Vertragsart} from 'enum/vertragsart.enum';
import {Vertragsstatus} from 'enum/vertragsstatus.enum';
import {Sparte} from 'enum/sparte.enum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Unterschrift} from 'com/unterschrift';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {Vertragsteil} from 'com/vertragsteil';
import {ExterneReferenz} from 'com/externe-referenz';
import {BoTyp} from 'enum/bo-typ.enum';

export interface IBundlevertrag extends IVertrag {
  einzelvertraege: Array<IVertrag>;
}

/**
 * Abbildung eines Bündelvertrags.
 * Es handelt sich hierbei um eine Liste von Einzelverträgen, die in einem Vertragsobjekt gebündelt sind.
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [BO Buendelvertrag](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-buendelvertrag)
 */
export class Bundlevertrag extends Geschaeftsobjekt implements IBundlevertrag {
  /**
   * Constructor.
   *
   * @param {Array<IVertrag>} einzelvertraege
   * @param {string} vertragsnummer
   * @param {Vertragsart} vertragsart
   * @param {Vertragsstatus} vertragstatus
   * @param {Sparte} sparte
   * @param {Date} vertragsbeginn
   * @param {Date} vertragsende
   * @param {IGeschaeftspartner} vertragspartner1
   * @param {IGeschaeftspartner} vertragspartner2
   * @param {Unterschrift} unterzeichnervp1
   * @param {Unterschrift} unterzeichnervp2
   * @param {Set<Vertragskonditionen>} vertragskonditionen
   * @param {Array<Vertragsteil>} vertragsteile
   * @param {string} beschreibung
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public einzelvertraege: Array<IVertrag>,
              public vertragsnummer: string,
              public vertragsart: Vertragsart,
              public vertragstatus: Vertragsstatus,
              public sparte: Sparte,
              public vertragsbeginn: Date,
              public vertragsende: Date,
              public vertragspartner1: IGeschaeftspartner,
              public vertragspartner2: IGeschaeftspartner,
              public unterzeichnervp1: Unterschrift,
              public unterzeichnervp2: Unterschrift,
              public vertragskonditionen: Set<Vertragskonditionen>,
              public vertragsteile: Array<Vertragsteil>,
              public beschreibung?: string,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.BUENDELVERTRAG, externeReferenzen);
  }
}
