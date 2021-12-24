import {Voraussetzungen} from 'enum/voraussetzungen.enum';
import {Geraet} from 'com/geraet';
import {Menge} from 'com/menge';

/**
 * Mit dieser Komponente werden Einschränkungen für die Anwendung von Tarifen modelliert.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Tarifeinschraenkung](https://www.bo4e.de/dokumentation/komponenten/com-tarifeinschraenkung)
 */
export class Tarifeinschraenkung {
  /**
   * Constructor.
   *
   * @param {Array<Voraussetzungen>}voraussetzungen
   * @param {Array<string>}zusatzprodukte
   * @param {Set<Geraet>}einschraenkungzaehler
   * @param {Set<Menge>}einschraenkungleistung
   */
  constructor(public voraussetzungen: Array<Voraussetzungen>,
              public zusatzprodukte: Array<string>,
              public einschraenkungzaehler: Set<Geraet>,
              public einschraenkungleistung: Set<Menge>) {
  }
}
