import {Zeiteinheit} from 'enum/zeiteinheit.enum';

/**
 * Diese Komponente wird zur Abbildung von Zeiträumen in Form von Dauern oder der Angabe von Start und Ende verwendet.
 *
 * Es muss daher eine der drei Möglichkeiten angegeben sein:
 * - Einheit und Dauer oder
 * - Zeitraum: Startdatum bis Enddatum oder
 * - Zeitraum: Startzeitpunkt (Datum und Uhrzeit) bis Endzeitpunkt (Datum und Uhrzeit)
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [COM Zeitraum](https://www.bo4e.de/dokumentation/komponenten/com-zeitraum)
 */
export class Zeitraum {
  /**
   * Constructor.
   *
   * @param {Zeiteinheit} einheit
   * @param {number} dauer
   * @param {Date} startdatum
   * @param {Date} enddatum
   * @param {Date} startzeitpunkt
   * @param {Date} endzeitpunkt
   */
  constructor(public einheit: Zeiteinheit,
              public dauer: number,
              public startdatum: Date,
              public enddatum: Date,
              public startzeitpunkt: Date,
              public endzeitpunkt: Date) {
  }
}
