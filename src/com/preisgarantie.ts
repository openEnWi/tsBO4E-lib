import {Preisgarantietyp} from 'enum/preisgarantietyp.enum';
import {Zeitraum} from 'com/zeitraum';

/**
 * Definition für eine Preisgarantie mit der Möglichkeit verschiedener Ausprägungen.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Preisgarantie](https://www.bo4e.de/dokumentation/komponenten/com-preisgarantie)
 */
export class Preisgarantie {
  /**
   * Constructor.
   *
   * @param {Preisgarantietyp} preisgarantietyp Typ der Preisgarantie.
   * @param {Zeitraum} zeitlicheGueltigkeit Gültigkeitszeitraum der Preisgarantie.
   * @param {string} beschreibung Optionale Beschreibung der Preisgarantie.
   */
  constructor(public preisgarantietyp: Preisgarantietyp,
              public zeitlicheGueltigkeit: Zeitraum,
              public beschreibung?: string) {
  }
}
