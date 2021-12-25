import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Betrag} from 'com/betrag';
import {Kostenklasse} from 'enum/kostenklasse.enum';
import {Zeitraum} from 'com/zeitraum';
import {Kostenblock} from 'com/kostenblock';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IKosten extends IGeschaeftsobjekt {
  kostenklasse: Kostenklasse;
  gueltigkeit: Zeitraum;
  kostenbloecke: Array<Kostenblock>;
  summeKosten?: Betrag;
}

/**
 * Dieses BO wird zur Übertagung von hierarchischen Kostenstrukturen verwendet.
 * Die Kosten werden dabei in Kostenblöcke und diese wiederum in Kostenpositionen strukturiert
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [BO Kosten](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-kosten)
 */
export class Kosten extends Geschaeftsobjekt implements IKosten {
  /**
   * Constructor.
   *
   * @param {Kostenklasse} kostenklasse
   * @param {Zeitraum} gueltigkeit
   * @param {Array<Kostenblock>} kostenbloecke
   * @param {Betrag} summeKosten
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public kostenklasse: Kostenklasse,
              public gueltigkeit: Zeitraum,
              public kostenbloecke: Array<Kostenblock>,
              public summeKosten?: Betrag,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.KOSTEN, externeReferenzen);
  }
}
