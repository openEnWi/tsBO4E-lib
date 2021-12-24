/**
 * Standorteigenschaften der Sparte Strom
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM StandorteigenschaftenStrom](https://www.bo4e.de/dokumentation/komponenten/com-standorteigenschaften-strom)
 */
export class StandorteigenschaftenStrom {
  /**
   * Constructor.
   *
   * @param {string} bilanzierungsgebiet_EIC
   * @param {string} regelzone
   * @param {string} regelzone_EIC
   */
  constructor(
    // eslint-disable-next-line camelcase
    public bilanzierungsgebiet_EIC: string,
    public regelzone: string,
    // eslint-disable-next-line camelcase
    public regelzone_EIC: string,
  ) {
  }
}
