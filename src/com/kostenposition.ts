import {Preis} from 'com/preis';
import {Betrag} from 'com/betrag';
import {Menge} from 'com/menge';


/**
 * Diese Komponente wird zur Übertagung der Details zu einer Kostenposition verwendet.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Kostenposition](https://www.bo4e.de/dokumentation/komponenten/com-kostenposition)
 */
export class Kostenposition {
  /**
   * Constructor.
   *
   * @param {string} positionstitel
   * @param {string} artikelbezeichnung
   * @param {Preis} einzelpreis
   * @param {Betrag} betragKostenposition
   * @param {Date} von
   * @param {Date} bis
   * @param {string} artikeldetail
   * @param {Menge} menge
   * @param {Menge} zeitmenge
   */
  constructor(public positionstitel: string,
              public artikelbezeichnung: string,
              public einzelpreis: Preis,
              public betragKostenposition: Betrag,
              public von?: Date,
              public bis?: Date,
              public artikeldetail?: string,
              public menge?: Menge,
              public zeitmenge?: Menge) {
  }
}
