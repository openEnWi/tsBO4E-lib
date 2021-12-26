import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
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

export interface ITarifinfo extends IGeschaeftsobjekt {
  bezeichnung: string;
  anbietername: string;
  sparte: Sparte;
  kundentyp: Kundentyp;
  tarifart: Tarifart;
  tariftyp: Tariftyp;
  tarifmerkmal: Tarifmerkmal;
  anbieter: IMarktteilnehmer;
  website?: string;
  zeitlicheGueltigkeit?: Zeitraum;
  energiemix?: Energiemix;
  vertragskonditionen?: Vertragskonditionen;
}

/**
 * Das BO Tarifinfo liefert die Merkmale, die einen Endkundentarif identifizierbar machen.
 * Dieses BO dient als Basis für weitere BOs mit erweiterten Anwendungsmöglichkeiten.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [BO Tarifinfo](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-tarifinfo)
 */
export class Tarifinfo extends Geschaeftsobjekt implements ITarifinfo {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {string} anbietername
   * @param {Sparte} sparte
   * @param {Kundentyp} kundentyp
   * @param {Tarifart} tarifart
   * @param {Tariftyp} tariftyp
   * @param {Tarifmerkmal} tarifmerkmal
   * @param {IMarktteilnehmer} anbieter
   * @param {string} website
   * @param {Zeitraum} zeitlicheGueltigkeit
   * @param {Energiemix} energiemix
   * @param {Vertragskonditionen} vertragskonditionen
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bezeichnung: string,
              public anbietername: string,
              public sparte: Sparte,
              public kundentyp: Kundentyp,
              public tarifart: Tarifart,
              public tariftyp: Tariftyp,
              public tarifmerkmal: Tarifmerkmal,
              public anbieter: IMarktteilnehmer,
              public website?: string,
              public zeitlicheGueltigkeit?: Zeitraum,
              public energiemix?: Energiemix,
              public vertragskonditionen?: Vertragskonditionen,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.TARIFINFO, externeReferenzen);
  }
}
