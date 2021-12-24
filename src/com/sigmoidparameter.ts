/**
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Sigmoidparameter](https://www.bo4e.de/dokumentation/komponenten/com-sigmoidparameter)
 */
export class Sigmoidparameter {
  /**
   * Constructor.
   *
   * @param {number} a Briefmarke Ortsverteilnetz
   * @param {number} b Wendepunkt für die bepreiste Menge
   * @param {number} c Exponent
   * @param {number} d Briefmarke Transportnetz
   */
  constructor(public a: number,
              public b: number,
              public c: number,
              public d: number) {
  }
}
