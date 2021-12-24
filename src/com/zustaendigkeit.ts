import {Themengebiet} from 'enum/themengebiet.enum';

/**
 * Enthält die zeitliche Zuordnung eines Ansprechpartners zu Abteilungen und Zuständigkeiten.
 *
 * veröffentlicht am 31. Januar 2018
 *
 * @see [COM Zustaendigkeit](https://www.bo4e.de/dokumentation/komponenten/com-zustandigkeit)
 */
export class Zustaendigkeit {
  /**
   * Constructor.
   * @param {Themengebiet} themengebiet
   * @param {string} jobtitel
   * @param {string} abteilung
   */
  constructor(public themengebiet: Themengebiet, public jobtitel?: string, public abteilung?: string) {
  }
}
