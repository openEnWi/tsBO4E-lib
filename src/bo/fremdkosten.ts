import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Fremdkostenblock} from 'com/fremdkostenblock';
import {Zeitraum} from 'com/zeitraum';
import {Betrag} from 'com/betrag';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IFremdkosten extends IGeschaeftsobjekt {
  gueltigkeit: Zeitraum;
  kostenbloecke: Array<Fremdkostenblock>;
  summeKosten?: Betrag;
}

/**
 * Mit diesem BO werden die Fremdkosten, beispielsweise für eine Angebotserstellung
 * oder eine Rechnungsprüfung, übertragen.
 * Die Fremdkosten enthalten dabei alle Kostenblöcke, die von anderen Marktteilnehmern oder Instanzen erhoben werden.
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [BO Fremdkosten](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-fremdkosten)
 */
export class Fremdkosten extends Geschaeftsobjekt implements IFremdkosten {
  /**
   * Constructor.
   *
   * @param {Zeitraum} gueltigkeit
   * @param {Array<Fremdkostenblock>} kostenbloecke
   * @param {Betrag} summeKosten
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public gueltigkeit: Zeitraum,
              public kostenbloecke: Array<Fremdkostenblock>,
              public summeKosten?: Betrag,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.FREMDKOSTEN, externeReferenzen);
  }
}
