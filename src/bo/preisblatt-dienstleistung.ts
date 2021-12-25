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

export interface IPreisblattDienstleistung extends IPreisblatt {
  bilanzierungsmethode: Bilanzierungsmethode;
  basisdienstleistung: Dienstleistungstyp;
  inklusivedienstleistung: Set<Dienstleistungstyp>;
  geraetedetails?: Geraeteeigenschaften;
}

/**
 * Die Variante des Preisblattmodells zur Abbildung der Preise für wahlfreie Dienstleistungen.
 *
 * veröffentlicht am 25. April 2018
 *
 * @see [BO PreisblattDienstleistung](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-preisblattdienstleistung)
 */
export class PreisblattDienstleistung extends Geschaeftsobjekt implements IPreisblattDienstleistung {
  /**
   * Constructor.
   *
   * @param {Bilanzierungsmethode} bilanzierungsmethode
   * @param {Dienstleistungstyp} basisdienstleistung
   * @param {Set<Dienstleistungstyp>} inklusivedienstleistung
   * @param {string} bezeichnung
   * @param {Sparte} sparte
   * @param {Preisstatus} preisstatus
   * @param {Zeitraum} gueltigkeit
   * @param {Set<Preisposition>} preispositionen
   * @param {Geraeteeigenschaften} geraetedetails
   * @param {IMarktteilnehmer} herausgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(
    public bilanzierungsmethode: Bilanzierungsmethode,
    public basisdienstleistung: Dienstleistungstyp,
    public inklusivedienstleistung: Set<Dienstleistungstyp>,
    public bezeichnung: string,
    public sparte: Sparte,
    public preisstatus: Preisstatus,
    public gueltigkeit: Zeitraum,
    public preispositionen: Set<Preisposition>,
    public geraetedetails?: Geraeteeigenschaften,
    public herausgeber?: IMarktteilnehmer,
    public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.PREISBLATTDIENSTLEISTUNG, externeReferenzen);
  }
}
