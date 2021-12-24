/**
 * Gibt die Staffelgrenzen der jeweiligen Preise an.
 *
 * veröffentlicht am 12. Dezember 2018
 *
 * @see [COM TarifpreisstaffelProOrt](https://www.bo4e.de/dokumentation/komponenten/com-tarifpreisstaffelproort)
 */
export class TarifpreisstaffelProOrt {
  /**
   * Constructor.
   *
   * @param {number} arbeitspreis
   * @param {number} arbeitspreisNT
   * @param {number} grundpreis
   * @param {number} staffelgrenzeVon
   * @param {number} staffelgrenzeBis
   */
  constructor(public arbeitspreis: number,
              public arbeitspreisNT: number,
              public grundpreis: number,
              public staffelgrenzeVon: number,
              public staffelgrenzeBis: number) {
  }
}
