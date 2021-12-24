import {Menge} from 'com/menge';
import {Preis} from 'com/preis';
import {Betrag} from 'com/betrag';

/**
 * Unterhalb von Angebotsteilen sind die Angebotspositionen eingebunden.
 * Hier werden die angebotenen Bestandteile einzeln aufgeführt.
 *
 * Beispiel:
 * Positionsmenge: 4000 kWh
 * Positionspreis: 24,56 ct/kWh
 * Positionskosten: 982,40 €
 *
 * @see [COM Angebotsposition](https://www.bo4e.de/dokumentation/komponenten/com-angebotsposition)
 */
export class Angebotsposition {
  /**
   * Constructor.
   *
   * @param {string} positionsbezeichnung Bezeichnung einer Angebotsposition
   * @param {string} positionspreis Preis der Einzelposition
   * @param {string} positionsmenge Menge der Position (optional)
   * @param {string} positionskosten Gesamtkosten der Position (optional)
   */
  constructor(public positionsbezeichnung: string,
              public positionspreis: Preis,
              public positionsmenge?: Menge,
              public positionskosten?: Betrag,
  ) {
  }
}
