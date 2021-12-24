import {Sigmoidparameter} from 'com/sigmoidparameter';

/**
 * Gibt die Staffelgrenzen der jeweiligen Preise an.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Preisstaffel](https://www.bo4e.de/dokumentation/komponenten/com-preisstaffel)
 */
export class Preisstaffel {
  /**
   * Constructor.
   * @param {number} einheitspreis
   * @param {number} staffelgrenzeVon
   * @param {number} staffelgrenzeBis
   * @param {Sigmoidparameter} signmoidparameter
   */
  constructor(public einheitspreis: number,
              public staffelgrenzeVon: number,
              public staffelgrenzeBis: number,
              public signmoidparameter?: Sigmoidparameter,
  ) {
  }
}
