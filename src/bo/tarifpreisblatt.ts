import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Kundentyp} from 'enum/kundentyp.enum';
import {Tarifart} from 'enum/tarifart.enum';
import {Tariftyp} from 'enum/tariftyp.enum';
import {Tarifmerkmal} from 'enum/tarifmerkmal.enum';
import {IMarktteilnehmer} from 'bo/marktteilnehmer';
import {Zeitraum} from 'com/zeitraum';
import {Energiemix} from 'com/energiemix';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {ITarifinfo} from 'bo/tarifinfo';
import {Tarifeinschraenkung} from 'com/tarifeinschraenkung';
import {Preisgarantie} from 'com/preisgarantie';
import {Tarifberechnungsparameter} from 'com/tarifberechnungsparameter';
import {AufAbschlag} from 'com/auf-abschlag';
import {Tarifpreisposition} from 'com/tarifpreisposition';

export interface ITarifpreisblatt extends ITarifinfo {
  preisstand: Date;
  berechnungsparameter: Tarifberechnungsparameter;
  tarifpreise: Array<Tarifpreisposition>;
  tarifeinschraenkungen?: Tarifeinschraenkung;
  preisgarantien?: Preisgarantie;
  tarifAufAbschlaege?: AufAbschlag;
}

/**
 * Tarifinformation mit Preisen, Aufschlägen und Berechnungssystematik.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [BO Tarifpreisblatt](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-tarifpreisblatt)
 */
export class Tarifpreisblatt extends Geschaeftsobjekt implements ITarifpreisblatt {
  /**
   * Constructor.
   *
   * @param {Date} preisstand
   * @param {Tarifberechnungsparameter} berechnungsparameter
   * @param {Array<Tarifpreisposition>} tarifpreise
   * @param {string} bezeichnung
   * @param {string} anbietername
   * @param {Sparte} sparte
   * @param {Kundentyp} kundentyp
   * @param {Tarifart} tarifart
   * @param {Tariftyp} tariftyp
   * @param {Tarifmerkmal} tarifmerkmal
   * @param {IMarktteilnehmer} anbieter
   * @param {Tarifeinschraenkung} tarifeinschraenkungen
   * @param {Preisgarantie} preisgarantien
   * @param {AufAbschlag} tarifAufAbschlaege
   * @param {string} website
   * @param {Zeitraum} zeitlicheGueltigkeit
   * @param {Energiemix} energiemix
   * @param {Vertragskonditionen} vertragskonditionen
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public preisstand: Date,
              public berechnungsparameter: Tarifberechnungsparameter,
              public tarifpreise: Array<Tarifpreisposition>,
              public bezeichnung: string,
              public anbietername: string,
              public sparte: Sparte,
              public kundentyp: Kundentyp,
              public tarifart: Tarifart,
              public tariftyp: Tariftyp,
              public tarifmerkmal: Tarifmerkmal,
              public anbieter: IMarktteilnehmer,
              public tarifeinschraenkungen?: Tarifeinschraenkung,
              public preisgarantien?: Preisgarantie,
              public tarifAufAbschlaege?: AufAbschlag,
              public website?: string,
              public zeitlicheGueltigkeit?: Zeitraum,
              public energiemix?: Energiemix,
              public vertragskonditionen?: Vertragskonditionen,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.TARIFPREISBLATT, externeReferenzen);
  }
}
