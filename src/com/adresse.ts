import {Landescode} from 'enum/landescode.enum';

/**
 * Enthält eine Adresse, die für die meisten Zwecke verwendbar ist.
 *
 * Version 2.0
 * veröffentlicht am 05. Oktober 2021
 *
 * @see [COM Adresse](https://www.bo4e.de/dokumentation/komponenten/com-adresse/5-10-2021)
 */
export class Adresse {
  /**
   * Constructor.
   *
   * @param {string} postleitzahl Postleitzahl der Adresse
   * @param {string} ort Ort der Adresse
   * @param {string} strasse Straße der Adresse (optional)
   * @param {string} hausnummer Hausnummer der Adresse (optional)
   * @param {string} postfach Postfach der Adresse (optional)
   * @param {string} adresszusatz Adresszusatz der Adresse (optional)
   * @param {string} coErgaenzung CO der Adresse (optional)
   * @param {Landescode} landescode Landescode der Adresse (optional)
   */
  constructor(public postleitzahl: string,
              public ort: string,
              public strasse?: string,
              public hausnummer?: string,
              public postfach?: string,
              public adresszusatz?: string,
              public coErgaenzung?: string,
              public landescode?: Landescode,
  ) {
  }
}
