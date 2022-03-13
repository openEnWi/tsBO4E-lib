import {AufAbschlagstyp} from 'enum/auf-abschlagstyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';

/**
 * Differenzierung der zu betrachtenden Produkte
 * anhand der preiserhöhenden (Aufschlag) bzw. preisvermindernden (Abschlag) Zusatzvereinbarungen,
 * die individuell zu einem neuen oder bestehenden Liefervertrag abgeschlossen werden können.
 * Es können mehrere Auf-/Abschläge gleichzeitig ausgewählt werden.
 *
 * veröffentlicht am 04. März 2022
 *
 * @see [COM PositionsAufAbschlag](https://www.bo4e.de/dokumentation/komponenten/com-positionsaufabschlag)
 */
export class PositionsAufAbschlag {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {AufAbschlagstyp} aufAbschlagstyp
   * @param {number} aufAbschlagswert
   * @param {Waehrungseinheit} aufAbschlagswaehrung
   * @param {string} beschreibung
   */
  constructor(public bezeichnung: string,
              public aufAbschlagstyp: AufAbschlagstyp,
              public aufAbschlagswert: number,
              public aufAbschlagswaehrung: Waehrungseinheit,
              public beschreibung?: string) {
  }
}
