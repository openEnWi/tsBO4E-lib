import {ITarifinfo} from 'bo/tarifinfo';
import {Tarifeinschraenkung} from 'com/tarifeinschraenkung';
import {Tarifberechnungsparameter} from 'com/tarifberechnungsparameter';
import {Preisgarantie} from 'com/preisgarantie';
import {AufAbschlagRegional} from 'com/auf-abschlag-regional';
import {TarifpreispositionProOrt} from 'com/tarifpreisposition-pro-ort';
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
import {ExterneReferenz} from 'com/externe-referenz';
import {BoTyp} from 'enum/bo-typ.enum';

export interface ITarif extends ITarifinfo {
   preisstand: Date;
   berechnungsparameter: Tarifberechnungsparameter;
   tarifpreise: Array<TarifpreispositionProOrt>;
   tarifeinschraenkungen?: Tarifeinschraenkung;
   preisgarantie?: Preisgarantie;
   tarifAufAbschlaege?: AufAbschlagRegional;
}

/**
 * Abbildung eines Tarifs mit regionaler Zuordnung von Preisen und Auf- und Abschlägen.
 *
 * veröffentlicht am 12. Dezember 2018
 *
 * @see [BO Tarif](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-tarifinfo-1)
 */
export class Tarif extends Geschaeftsobjekt implements ITarif {
  /**
   * Constructor.
   *
   * @param {Date} preisstand
   * @param {Tarifberechnungsparameter} berechnungsparameter
   * @param {Array<TarifpreispositionProOrt>} tarifpreise
   * @param {string} bezeichnung
   * @param {string} anbietername
   * @param {Sparte} sparte
   * @param {Kundentyp[]} kundentypen
   * @param {Tarifart} tarifart
   * @param {Tariftyp} tariftyp
   * @param {Tarifmerkmal[]} tarifmerkmale
   * @param {IMarktteilnehmer} anbieter
   * @param {Tarifeinschraenkung} tarifeinschraenkungen
   * @param {Preisgarantie} preisgarantie
   * @param {AufAbschlagRegional} tarifAufAbschlaege
   * @param {string} website
   * @param {string} bemerkung
   * @param {Date} anwendungVon
   * @param {Zeitraum} zeitlicheGueltigkeit
   * @param {Energiemix} energiemix
   * @param {Vertragskonditionen} vertragskonditionen
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public preisstand: Date,
              public berechnungsparameter: Tarifberechnungsparameter,
              public tarifpreise: Array<TarifpreispositionProOrt>,
              public bezeichnung: string,
              public anbietername: string,
              public sparte: Sparte,
              public kundentypen: Kundentyp[],
              public tarifart: Tarifart,
              public tariftyp: Tariftyp,
              public tarifmerkmale: Tarifmerkmal[],
              public anbieter: IMarktteilnehmer,
              public tarifeinschraenkungen?: Tarifeinschraenkung,
              public preisgarantie?: Preisgarantie,
              public tarifAufAbschlaege?: AufAbschlagRegional,
              public website?: string,
              public bemerkung?: string,
              public anwendungVon?: Date,
              public zeitlicheGueltigkeit?: Zeitraum,
              public energiemix?: Energiemix,
              public vertragskonditionen?: Vertragskonditionen,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.TARIF, externeReferenzen);
  }
}
