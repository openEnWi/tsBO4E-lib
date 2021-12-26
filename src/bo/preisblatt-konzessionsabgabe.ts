import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Zeitraum} from 'com/zeitraum';
import {Preisstatus} from 'enum/preisstatus.enum';
import {IMarktteilnehmer} from 'bo/marktteilnehmer';
import {Preisposition} from 'com/preisposition';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {IPreisblatt} from 'bo/preisblatt';
import {KundengruppeKa} from 'enum/kundengruppe-ka.enum';

export interface IPreisblattKonzessionsabgabe extends IPreisblatt {
  kundengruppeKA: KundengruppeKa;
}

/**
 * Die Variante des Preisblattmodells zur Abbildung von allgemeinen Abgaben
 *
 * veröffentlicht am 08. Mai 2018
 *
 * @see [BO PreisblattKonzessionsabgabe]
 *      (https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-preisblattkonzessionsabgabe)
 */
export class PreisblattKonzessionsabgabe extends Geschaeftsobjekt implements IPreisblattKonzessionsabgabe {
  /**
   * Constructor.
   *
   * @param {KundengruppeKa} kundengruppeKA
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public kundengruppeKA: KundengruppeKa,
              public bezeichnung: string,
              public sparte: Sparte,
              public preisstatus: Preisstatus,
              public gueltigkeit: Zeitraum,
              public preispositionen: Set<Preisposition>,
              public herausgeber?: IMarktteilnehmer,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATTKONZESSIONSABGABE, externeReferenzen);
  }
}
