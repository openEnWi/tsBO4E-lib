import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Zeitraum} from 'com/zeitraum';
import {Preisstatus} from 'enum/preisstatus.enum';
import {IMarktteilnehmer} from 'bo/marktteilnehmer';
import {Preisposition} from 'com/preisposition';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {IPreisblatt} from 'bo/preisblatt';
import {Bilanzierungsmethode} from 'enum/bilanzierungsmethode.enum';
import {Netzebene} from 'enum/netzebene.enum';
import {Kundengruppe} from 'enum/kundengruppe.enum';

export interface IPreisblattNetznutzung extends IPreisblatt {
  bilanzierungsmethode: Bilanzierungsmethode;
  netzebene: Netzebene;
  kundengruppe: Kundengruppe;
}

/**
 * Die Variante des Preisblattmodells zur Abbildung der Netznutzungspreise.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [BO PreisblattKonzessionsabgabe]
 *      (https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-preisblattkonzessionsabgabe)
 */
export class PreisblattNetznutzung extends Geschaeftsobjekt implements IPreisblattNetznutzung {
  /**
   * Constructor.
   *
   * @param {Bilanzierungsmethode} bilanzierungsmethode
   * @param {Netzebene} netzebene
   * @param {Kundengruppe} kundengruppe
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bilanzierungsmethode: Bilanzierungsmethode,
              public netzebene: Netzebene,
              public kundengruppe: Kundengruppe,
              public bezeichnung: string,
              public sparte: Sparte,
              public preisstatus: Preisstatus,
              public gueltigkeit: Zeitraum,
              public preispositionen: Set<Preisposition>,
              public herausgeber?: IMarktteilnehmer,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATTNETZNUTZUNG, externeReferenzen);
  }
}
