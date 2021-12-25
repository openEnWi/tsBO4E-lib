import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Lokationstyp} from 'enum/lokationstyp.enum';
import {Verbrauch} from 'com/verbrauch';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IEnergiemenge extends IGeschaeftsobjekt {
  lokationsId: string;
  lokationstyp: Lokationstyp;
  energieverbrauch: Array<Verbrauch>;
}

/**
 * Abbildung von Mengen, die Lokationen zugeordnet sind.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Energiemenge](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-energiemenge)
 */
export class Energiemenge extends Geschaeftsobjekt implements IEnergiemenge {
  /**
   * Constructor.
   *
   * @param {string} lokationsId
   * @param {Lokationstyp} lokationstyp
   * @param {Array<Verbrauch>} energieverbrauch
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public lokationsId: string,
              public lokationstyp: Lokationstyp,
              public energieverbrauch: Array<Verbrauch>,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.ENERGIEMENGE, externeReferenzen);
  }
}
