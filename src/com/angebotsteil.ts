import {Menge} from 'com/menge';
import {Angebotsposition} from 'com/angebotsposition';
import {Preis} from 'com/preis';
import {Marktlokation} from 'bo/marktlokation';

/**
 * Mit dieser Komponente wird ein Teil einer Angebotsvariante abgebildet.
 *
 * Hier werden alle Angebotspositionen aggregiert. Angebotsteile werden im einfachsten Fall für eine Marktlokation oder
 * Lieferstellenadresse erzeugt. Hier werden die Mengen und Gesamtkosten aller Angebotspositionen zusammengefasst.
 * Eine Variante besteht mindestens aus einem Angebotsteil.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Angebotsteil](https://www.bo4e.de/dokumentation/komponenten/com-angebotsteil)
 */
export class Angebotsteil {
  /**
   * Constructor.
   *
   * @param {Set<Marktlokation>} lieferstellenangebotsteil Lieferstellen des Angebotsteils
   * @param {Array<Angebotsposition>} positionen Positionen des Angebotsteils
   * @param {Menge} gesamtmengeangebotsteil Gesamtmenge des Angebotsteils (optional)
   * @param {Preis} gesamtkostenangebotsteil Gesamtkosten des Angebotsteils (optional)
   * @param {string} anfrageSubreferenz Subreferenz zur Anfrage (optional)
   */
  constructor(public lieferstellenangebotsteil: Set<Marktlokation>,
              public positionen: Array<Angebotsposition>,
              public gesamtmengeangebotsteil?: Menge,
              public gesamtkostenangebotsteil?: Preis,
              public anfrageSubreferenz?: string) {
  }
}
