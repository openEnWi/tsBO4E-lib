import {Marktgebietinfo} from 'com/marktgebietinfo';

/**
 * Standorteigenschaften der Sparte Gas
 *
 * veröffentlicht am 03. Juli 2019
 *
 * @see [COM StandorteigenschaftenGas](https://www.bo4e.de/dokumentation/komponenten/com-standorteigenschaftengas)
 */
export class StandorteigenschaftenGas {
  /**
   * Constructor.
   *
   * @param {Set<string>} netzkontonummern
   * @param {Marktgebietinfo} marktgebiete
   */
  constructor(public netzkontonummern: Set<string>,
              public marktgebiete: Marktgebietinfo) {
  }
}
