/**
 * Informationen zum Marktgebiet im Gas
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM Marktgebietinfo](https://www.bo4e.de/dokumentation/komponenten/com-marktgebietinfo)
 */
export class Marktgebietinfo {
  /**
   * Constructor.
   *
   * @param {string} marktgebiet
   * @param {string} marktgebietcode
   */
  constructor(public marktgebiet: string, public marktgebietcode: string) {
  }
}
