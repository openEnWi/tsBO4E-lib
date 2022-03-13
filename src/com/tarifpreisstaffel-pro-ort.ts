import {Preis} from 'com/preis';

/**
 * Gibt die Staffelgrenzen der jeweiligen Preise an.
 *
 * veröffentlicht am 02. März 2022
 *
 * @see [COM TarifpreisstaffelProOrt](https://www.bo4e.de/dokumentation/komponenten/com-tarifpreisstaffelproort)
 */
export class TarifpreisstaffelProOrt {
  /**
   * Constructor.
   *
   * @param {number} staffelgrenzeVon
   * @param {number} staffelgrenzeBis
   * @param {Preis} arbeitspreis
   * @param {Preis} arbeitspreisNT
   * @param {Preis} grundpreis
   */
  constructor(public staffelgrenzeVon: number,
              public staffelgrenzeBis: number,
              public arbeitspreis?: Preis,
              public arbeitspreisNT?: Preis,
              public grundpreis?: Preis) {
  }
}
