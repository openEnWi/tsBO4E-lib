import {Zeitraum} from 'com/zeitraum';

/**
 * Abbildung für Vertragskonditionen. Die Komponente wird sowohl im Vertrag als auch im Tarif verwendet.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM Vertragskonditionen](https://www.bo4e.de/dokumentation/komponenten/com-vertragskonditionen)
 */
export class Vertragskonditionen {
  /**
   * Constructor.
   *
   * @param {string} beschreibung
   * @param {number} anzahlAbschlaege
   * @param {Zeitraum} vertragslaufzeit
   * @param {Zeitraum} kuendigungsfrist
   * @param {Zeitraum} vertragsverlaengerung
   * @param {Zeitraum} abschlagszyklus
   */
  constructor(public beschreibung?: string,
              public anzahlAbschlaege?: number,
              public vertragslaufzeit?: Zeitraum,
              public kuendigungsfrist?: Zeitraum,
              public vertragsverlaengerung?: Zeitraum,
              public abschlagszyklus?: Zeitraum) {
  }
}
