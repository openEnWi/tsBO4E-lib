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
import {Kosten} from 'bo/kosten';

export interface ITarifkosten extends ITarifinfo {
  kosten: Kosten;
}

/**
 * Objekt zur Kommunikation von Kosten, die im Rahmen der Tarifanwendung entstehen.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [BO Tarifkosten](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-tarifkosten)
 */
export class Tarifkosten extends Geschaeftsobjekt implements ITarifkosten {
  /**
   * Constructor.
   *
   * @param {Kosten} kosten
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
  constructor(public kosten: Kosten,
              public bezeichnung: string,
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
    super(BoTyp.TARIFKOSTEN, externeReferenzen);
  }
}
