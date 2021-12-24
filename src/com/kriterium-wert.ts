import {Tarifregionskriterium} from 'enum/tarifregionskriterium.enum';

/**
 * Mit dieser Komponente können Kriterien und deren Werte definiert werden.
 *
 * veröffentlicht am 29. August 2018
 *
 * @see [COM KriteriumWert](https://www.bo4e.de/dokumentation/komponenten/com-kriteriumwert)
 */
export class KriteriumWert {
  /**
   * Constructor.
   *
   * @param {Tarifregionskriterium} kriterium
   * @param {string} wert
   */
  constructor(public kriterium: Tarifregionskriterium, public wert: string) {

  }
}
