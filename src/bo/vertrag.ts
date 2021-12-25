import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Vertragsart} from 'enum/vertragsart.enum';
import {Vertragsstatus} from 'enum/vertragsstatus.enum';
import {Sparte} from 'enum/sparte.enum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Unterschrift} from 'com/unterschrift';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {Vertragsteil} from 'com/vertragsteil';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IVertrag extends IGeschaeftsobjekt {
  vertragsnummer: string;
  vertragsart: Vertragsart;
  vertragstatus: Vertragsstatus;
  sparte: Sparte;
  vertragsbeginn: Date;
  vertragsende: Date;
  vertragspartner1: IGeschaeftspartner;
  vertragspartner2: IGeschaeftspartner;
  unterzeichnervp1: Unterschrift;
  unterzeichnervp2: Unterschrift;
  vertragskonditionen: Set<Vertragskonditionen>;
  vertragsteile: Array<Vertragsteil>;
  beschreibung?: string;
}

/**
 * Modell für die Abbildung von Vertragsbeziehungen.
 * Das Objekt dient dazu, alle Arten von Verträgen, die in der Energiewirtschaft Verwendung finden, abzubilden.
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [BO Vertrag](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-vertrag)
 */
export class Vertrag extends Geschaeftsobjekt implements IVertrag {
  /**
   * Constructor.
   *
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
  constructor(public vertragsnummer: string,
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
    super(BoTyp.VERTRAG, externeReferenzen);
  }
}
