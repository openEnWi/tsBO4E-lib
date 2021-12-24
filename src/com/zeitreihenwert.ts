import {Messwertstatus} from 'enum/messwertstatus.enum';
import {Messwertstatuszusatz} from 'enum/messwertstatuszusatz.enum';

/**
 * Abbildung eines Zeitreihenwertes bestehend aus Zeitraum, Wert und Statusinformationen.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [COM Zeitreihenwert](https://www.bo4e.de/dokumentation/komponenten/com-zeitreihenwert)
 * @see Zeitreihenwertkompakt
 */
export class Zeitreihenwert {
  /**
   * Constructor.
   *
   * @param {Date} datumUhrzeitVon
   * @param {Date} datumUhrzeitBis
   * @param {number} wert
   * @param {Messwertstatus} status
   * @param {Messwertstatuszusatz} statuszusatz
   */
  constructor(public datumUhrzeitVon: Date,
              public datumUhrzeitBis: Date,
              public wert: number,
              public status?: Messwertstatus,
              public statuszusatz?: Messwertstatuszusatz) {
  }
}
