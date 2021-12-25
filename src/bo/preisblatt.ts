import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Zeitraum} from 'com/zeitraum';
import {Preisstatus} from 'enum/preisstatus.enum';
import {IMarktteilnehmer} from 'bo/marktteilnehmer';
import {Preisposition} from 'com/preisposition';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IPreisblatt extends IGeschaeftsobjekt {
  bezeichnung: string;
  sparte: Sparte;
  preisstatus: Preisstatus;
  gueltigkeit: Zeitraum;
  preispositionen: Set<Preisposition>;
  herausgeber?: IMarktteilnehmer;
}

/**
 * Das allgemeine Modell zur Abbildung von Preisen.
 * Davon abgeleitet können, über die Zuordnung identifizierender Merkmale,
 * spezielle Preisblatt-Varianten modelliert werden.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [BO Preisblatt](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-preisblatt)
 */
export class Preisblatt extends Geschaeftsobjekt implements IPreisblatt {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bezeichnung: string,
              public sparte: Sparte,
              public preisstatus: Preisstatus,
              public gueltigkeit: Zeitraum,
              public preispositionen: Set<Preisposition>,
              public herausgeber?: IMarktteilnehmer,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATT, externeReferenzen);
  }
}
