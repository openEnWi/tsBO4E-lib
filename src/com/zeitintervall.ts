import {Zeiteinheit} from 'enum/zeiteinheit.enum';

/**
 * Die Abbildung eines Zeitintervalls.
 * Z.B. zur Anwendung als Raster in äquidistanten Zeitreihen/Lastgängen, beispielsweise 15 Minuten.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [COM Zeitintervall](https://www.bo4e.de/dokumentation/komponenten/com-zeitintervall)
 */
export class Zeitintervall {
  /**
   * Constructor.
   *
   * @param {number} wert
   * @param {Zeiteinheit} zeiteinheit
   */
  constructor(public wert: number, public zeiteinheit: Zeiteinheit) {
  }
}
