import {Zeitreihenwertkompakt} from 'com/zeitreihenwertkompakt';

/**
 * Abbildung eines Tagesvektors eines beliebigen äquidistanten Zeitrasters.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [COM Tagesvektor](https://www.bo4e.de/dokumentation/komponenten/com-tagesvektor)
 */
export class Tagesvektor {
  /**
   * Constructor.
   *
   * @param {Date} tag
   * @param {Zeitreihenwertkompakt} werte
   */
  constructor(public tag: Date, public werte: Array<Zeitreihenwertkompakt>) {
  }
}
