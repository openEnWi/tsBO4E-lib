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
import {Dienstleistungstyp} from 'enum/dienstleistungstyp.enum';
import {Geraeteeigenschaften} from 'com/geraeteeigenschaften';

export interface IPreisblattMessung extends IPreisblatt {
  bilanzierungsmethode: Bilanzierungsmethode;
  messebene: Netzebene;
  inklusivedienstleistung: Set<Dienstleistungstyp>;
  zaehler: Geraeteeigenschaften;
  inklusivegeraete: Set<Geraeteeigenschaften>;
}

/**
 * Die Variante des Preisblattmodells zur Abbildung der Preise für den Messstellenbetrieb
 * und damit verbundene Leistungen.
 *
 * veröffentlicht am 18. April 2018
 *
 * @see [BO PreisblattMessung](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-preisblattmessung)
 */
export class PreisblattMessung extends Geschaeftsobjekt implements IPreisblattMessung {
  /**
   * Constructor.
   *
   * @param {Bilanzierungsmethode} bilanzierungsmethode
   * @param {Netzebene} messebene
   * @param {Set<Dienstleistungstyp>} inklusivedienstleistung
   * @param {Geraeteeigenschaften} zaehler
   * @param {Set<Geraeteeigenschaften>} inklusivegeraete
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bilanzierungsmethode: Bilanzierungsmethode,
              public messebene: Netzebene,
              public inklusivedienstleistung: Set<Dienstleistungstyp>,
              public zaehler: Geraeteeigenschaften,
              public inklusivegeraete: Set<Geraeteeigenschaften>,
              public bezeichnung: string,
              public sparte: Sparte,
              public preisstatus: Preisstatus,
              public gueltigkeit: Zeitraum,
              public preispositionen: Set<Preisposition>,
              public herausgeber?: IMarktteilnehmer,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATTMESSUNG, externeReferenzen);
  }
}
