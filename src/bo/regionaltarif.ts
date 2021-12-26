import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {ITarifinfo} from 'bo/tarifinfo';
import {Sparte} from 'enum/sparte.enum';
import {Kundentyp} from 'enum/kundentyp.enum';
import {Tarifart} from 'enum/tarifart.enum';
import {Tariftyp} from 'enum/tariftyp.enum';
import {Tarifmerkmal} from 'enum/tarifmerkmal.enum';
import {IMarktteilnehmer} from 'bo/marktteilnehmer';
import {Zeitraum} from 'com/zeitraum';
import {Energiemix} from 'com/energiemix';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {RegionalerAufAbschlag} from 'com/regionaler-auf-abschlag';
import {Tarifeinschraenkung} from 'com/tarifeinschraenkung';
import {RegionalePreisgarantie} from 'com/regionale-preisgarantie';
import {Tarifberechnungsparameter} from 'com/tarifberechnungsparameter';
import {RegionaleTarifpreisposition} from 'com/regionale-tarifpreisposition';

export interface IRegionaltarif extends ITarifinfo {
  preisstand: Date;
  preisgarantien: Set<RegionalePreisgarantie>;
  berechnungsparameter: Tarifberechnungsparameter;
  tarifpreise: Array<RegionaleTarifpreisposition>;
  tarifeinschraenkungen?: Tarifeinschraenkung;
  tarifAufAbschlaege?: RegionalerAufAbschlag;
}

/**
 * veröffentlicht am 30. Mai 2018
 *
 * @see [BO Regionaltarif](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-regionaltarif)
 */
export class Regionaltarif extends Geschaeftsobjekt implements IRegionaltarif {
  /**
   * Constructor.
   *
   * @param {Date} preisstand
   * @param {Set<RegionalePreisgarantie>} preisgarantien
   * @param {Tarifberechnungsparameter} berechnungsparameter
   * @param {Array<RegionaleTarifpreisposition>} tarifpreise
   * @param {string} bezeichnung
   * @param {string} anbietername
   * @param {Sparte} sparte
   * @param {Kundentyp} kundentyp
   * @param {Tarifart} tarifart
   * @param {Tariftyp} tariftyp
   * @param {Tarifmerkmal} tarifmerkmal
   * @param {IMarktteilnehmer} anbieter
   * @param {Tarifeinschraenkung} tarifeinschraenkungen
   * @param {RegionalerAufAbschlag} tarifAufAbschlaege
   * @param {string} website
   * @param {Zeitraum} zeitlicheGueltigkeit
   * @param {Energiemix} energiemix
   * @param {Vertragskonditionen} vertragskonditionen
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public preisstand: Date,
              public preisgarantien: Set<RegionalePreisgarantie>,
              public berechnungsparameter: Tarifberechnungsparameter,
              public tarifpreise: Array<RegionaleTarifpreisposition>,
              public bezeichnung: string,
              public anbietername: string,
              public sparte: Sparte,
              public kundentyp: Kundentyp,
              public tarifart: Tarifart,
              public tariftyp: Tariftyp,
              public tarifmerkmal: Tarifmerkmal,
              public anbieter: IMarktteilnehmer,
              public tarifeinschraenkungen?: Tarifeinschraenkung,
              public tarifAufAbschlaege?: RegionalerAufAbschlag,
              public website?: string,
              public zeitlicheGueltigkeit?: Zeitraum,
              public energiemix?: Energiemix,
              public vertragskonditionen?: Vertragskonditionen,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.REGIONALTARIF, externeReferenzen);
  }
}
