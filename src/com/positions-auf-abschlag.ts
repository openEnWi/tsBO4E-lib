import {AufAbschlagstyp} from 'enum/auf-abschlagstyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';

/**
 * Differenzierung der zu betrachtenden Produkte
 * anhand der preiserhöhenden (Aufschlag) bzw. preisvermindernden (Abschlag) Zusatzvereinbarungen,
 * die individuell zu einem neuen oder bestehenden Liefervertrag abgeschlossen werden können.
 * Es können mehrere Auf-/Abschläge gleichzeitig ausgewählt werden.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM PositionsAufAbschlag](https://www.bo4e.de/dokumentation/komponenten/com-positionsaufabschlag)
 */
export class PositionsAufAbschlag {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {string} beschreibung
   * @param {AufAbschlagstyp} aufAbschlagstyp
   * @param {number} aufAbschlagswert
   * @param {Waehrungseinheit} aufAbschlagswaehrung
   */
  constructor(public bezeichnung: string,
              public beschreibung: string,
              public aufAbschlagstyp: AufAbschlagstyp,
              public aufAbschlagswert: number,
              public aufAbschlagswaehrung: Waehrungseinheit) {
  }
}
