import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {StandorteigenschaftenAllgemein} from 'com/standorteigenschaften-allgemein';
import {StandorteigenschaftenStrom} from 'com/standorteigenschaften-strom';
import {StandorteigenschaftenGas} from 'com/standorteigenschaften-gas';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IStandorteigenschaften extends IGeschaeftsobjekt {
  eigenschaftenAllgemein: StandorteigenschaftenAllgemein;
  eigenschaftenStrom: Set<StandorteigenschaftenStrom>;
  eigenschaftenGas: Set<StandorteigenschaftenGas>;
}

/**
 * In diesem BO werden die regionalen und spartenspezifischen Eigenschaften einer gegebenen Adresse modelliert.
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [BO Standorteigenschaften](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-standorteigenschaften)
 */
export class Standorteigenschaften extends Geschaeftsobjekt implements IStandorteigenschaften {
  /**
   * Constructor.
   *
   * @param {StandorteigenschaftenAllgemein} eigenschaftenAllgemein
   * @param {Set<StandorteigenschaftenAllgemein>} eigenschaftenStrom
   * @param {Set<StandorteigenschaftenAllgemein>} eigenschaftenGas
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public eigenschaftenAllgemein: StandorteigenschaftenAllgemein,
              public eigenschaftenStrom: Set<StandorteigenschaftenStrom>,
              public eigenschaftenGas: Set<StandorteigenschaftenGas>,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.STANDORTEIGENSCHAFTEN, externeReferenzen);
  }
}
