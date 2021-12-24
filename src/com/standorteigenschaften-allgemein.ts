/**
 * Allgemeine Standorteigenschaften
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM StandorteigenschaftenAllgemein]
 *      (https://www.bo4e.de/dokumentation/komponenten/comndorteigenschaftenallgemein)
 */
export class StandorteigenschaftenAllgemein {
  /**
   * Constructor.
   *
   * @param {string} postleitzahl
   * @param {string} ort
   * @param {string} kreisname
   * @param {string} gemeindename
   * @param {string} gemeindekennziffer
   * @param {number} gemeindeeinwohner
   * @param {string} bundesland
   */
  constructor(public postleitzahl: string,
              public ort: string,
              public kreisname: string,
              public gemeindename: string,
              public gemeindekennziffer: string,
              public gemeindeeinwohner: number,
              public bundesland: string) {
  }
}
