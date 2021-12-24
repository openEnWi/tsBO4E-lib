/**
 * Dient der Adressierung über die Liegenschafts-Information.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Katasteradresse](https://www.bo4e.de/dokumentation/komponenten/com-katasteradresse)
 */
export class Katasteradresse {
  /**
   * Constructor.
   *
   * @param {string} gemarkungFlur
   * @param {string} flurstueck
   */
  constructor(public gemarkungFlur: string, public flurstueck: string) {
  }
}
