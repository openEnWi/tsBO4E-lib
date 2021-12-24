import {Menge} from 'com/menge';

/**
 * Abbildung für einen Vertragsteil.
 * Der Vertragsteil wird dazu verwendet,
 * eine vertragliche Leistung in Bezug zu einer Lokation (Markt- oder Messlokation) festzulegen.
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [COM Vertragsteil](https://www.bo4e.de/dokumentation/komponenten/com-vertragsteil)
 */
export class Vertragsteil {
  /**
   * Constructor.
   *
   * @param {Date} vertragsteilbeginn
   * @param {Date} vertragsteilende
   * @param {string} lokation
   * @param {Menge} vertraglichFixierteMenge
   * @param {Menge} minimaleAbnahmemenge
   * @param {Menge} maximaleAbnahmemenge
   */
  constructor(public vertragsteilbeginn: Date,
              public vertragsteilende: Date,
              public lokation?: string,
              public vertraglichFixierteMenge?: Menge,
              public minimaleAbnahmemenge?: Menge,
              public maximaleAbnahmemenge?: Menge) {
  }
}
