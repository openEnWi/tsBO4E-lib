import {Geraeteeigenschaften} from 'com/geraeteeigenschaften';

/**
 * Mit dieser Komponente werden alle Geräte modelliert, die keine Zähler sind.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Geraet](https://www.bo4e.de/dokumentation/komponenten/com-geraet)
 */
export class Geraet {
  /**
   * Constructor.
   *
   * @param {Set<Geraeteeigenschaften>} geraeteeigenschaften Eigenschaften des Gerätes.
   * @param {string} geraetenummer Nummer des Gerätes.
   */
  constructor(public geraeteeigenschaften: Set<Geraeteeigenschaften>, public geraetenummer?: string) {
  }
}
