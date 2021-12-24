import {Betrag} from 'com/betrag';
import {Menge} from 'com/menge';
import {Preis} from 'com/preis';

/**
 * Eine Kostenposition im Bereich der Fremdkosten
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM Fremdkostenposition](https://www.bo4e.de/dokumentation/komponenten/com-fremdkostenposition)
 */
export class Fremdkostenposition {
  /**
   * Constructor.
   *
   * @param {string} positionstitel
   * @param {Date} von
   * @param {Date} bis
   * @param {string} artikelbezeichnung
   * @param {Betrag} betragKostenposition
   * @param {Preis} einzelpreis
   * @param {string} artikeldetail
   * @param {Menge} menge
   * @param {Menge} zeitmenge
   * @param {string} marktpartnername
   * @param {string} marktpartnercode
   * @param {string} gebietcodeEIC
   * @param {string} linkPresblatt
   */
  constructor(public positionstitel: string,
              public von: Date,
              public bis: Date,
              public artikelbezeichnung: string,
              public betragKostenposition: Betrag,
              public einzelpreis: Preis,
              public artikeldetail?: string,
              public menge?: Menge,
              public zeitmenge?: Menge,
              public marktpartnername?: string,
              public marktpartnercode?: string,
              public gebietcodeEIC?: string,
              public linkPresblatt?: string) {

  }
}
