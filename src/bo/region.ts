import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Regionskriterium} from 'com/regionskriterium';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IRegion extends IGeschaeftsobjekt {
  bezeichnung: string;
  positivListe: Array<Regionskriterium>;
  negativListe: Array<Regionskriterium>;
}

/**
 * Modellierung einer Region als Menge von Kriterien, die eine Region beschreiben.
 *
 * veröffentlicht am 22. August 2018
 *
 * @see [BO Region](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-region)
 */
export class Region extends Geschaeftsobjekt implements IRegion {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Array<Regionskriterium>} positivListe
   * @param {Array<Regionskriterium>} negativListe
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public bezeichnung: string,
              public positivListe: Array<Regionskriterium>,
              public negativListe: Array<Regionskriterium>,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.REGION, externeReferenzen);
  }
}
