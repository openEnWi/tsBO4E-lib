import {Sigmoidparameter} from 'com/sigmoidparameter';
import {RegionaleGueltigkeit} from 'com/regionale-gueltigkeit';

/**
 * Abbildung einer Preisstaffel mit regionaler Abgrenzung.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM RegionalePreisstaffel](https://www.bo4e.de/dokumentation/komponenten/com-regionalepreisstaffel)
 */
export class RegionalePreisstaffel {
  /**
   * Constructor.
   *
   * @param {number} einheitspreis
   * @param {number} staffelgrenzeVon
   * @param {number} staffelgrenzeBis
   * @param {RegionaleGueltigkeit} regionaleGueltigkeit
   * @param {Sigmoidparameter} sigmoidparameter
   */
  constructor(public einheitspreis: number,
              public staffelgrenzeVon: number,
              public staffelgrenzeBis: number,
              public regionaleGueltigkeit: RegionaleGueltigkeit,
              public sigmoidparameter?: Sigmoidparameter) {
  }
}
