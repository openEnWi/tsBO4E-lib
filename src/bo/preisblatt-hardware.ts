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
import {Dienstleistungstyp} from 'enum/dienstleistungstyp.enum';
import {Geraeteeigenschaften} from 'com/geraeteeigenschaften';
import {Netzebene} from 'enum/netzebene.enum';

export interface IPreisblattHardware extends IPreisblatt {
  bilanzierungsmethode: Bilanzierungsmethode;
  messebene: Netzebene;
  inklusivedienstleistung: Set<Dienstleistungstyp>;
  inklusivegeraete: Set<Geraeteeigenschaften>;
  basisgeraet?: Geraeteeigenschaften;
}

/**
 * Die Variante des Preisblattmodells zur Abbildung der Preise für zusätzliche Hardware.
 *
 * veröffentlicht am 11. Dezember 2019
 *
 * @see [BO PreisblattHardware](https://www.bo4e.de/dokumentation/geschaeftsobjekte/preisblatthardware)
 */
export class PreisblattHardware extends Geschaeftsobjekt implements IPreisblattHardware {
  /**
   * Constructor.
   *
   * @param {Bilanzierungsmethode} bilanzierungsmethode
   * @param {Netzebene} messebene
   * @param {Set<Dienstleistungstyp>} inklusivedienstleistung
   * @param {Set<Geraeteeigenschaften>} inklusivegeraete
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {Geraeteeigenschaften} basisgeraet
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bilanzierungsmethode: Bilanzierungsmethode,
              public messebene: Netzebene,
              public inklusivedienstleistung: Set<Dienstleistungstyp>,
              public inklusivegeraete: Set<Geraeteeigenschaften>,
              public bezeichnung: string,
              public sparte: Sparte,
              public preisstatus: Preisstatus,
              public gueltigkeit: Zeitraum,
              public preispositionen: Set<Preisposition>,
              public basisgeraet?: Geraeteeigenschaften,
              public herausgeber?: IMarktteilnehmer,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATTHARDWARE, externeReferenzen);
  }
}
