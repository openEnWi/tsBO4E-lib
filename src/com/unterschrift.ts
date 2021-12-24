/**
 * Modellierung einer Unterschrift, z.B. für Verträge, Angebote etc.
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [COM Unterschrift](https://www.bo4e.de/dokumentation/komponenten/com-unterschrift)
 */
export class Unterschrift {
  /**
   * Constructor.
   *
   * @param {string} name
   * @param {string} ort
   * @param {Date} datum
   */
  constructor(public name: string, public ort?: string, public datum?: Date) {
  }
}
