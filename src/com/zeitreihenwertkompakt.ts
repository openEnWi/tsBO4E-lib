import {Messwertstatus} from 'enum/messwertstatus.enum';
import {Messwertstatuszusatz} from 'enum/messwertstatuszusatz.enum';

/**
 * Abbildung eines kompakten Zeitreihenwertes in dem ausschliesslich der Wert und Statusinformationen stehen.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [COM Zeitreihenwertkompakt](https://www.bo4e.de/dokumentation/komponenten/com-zeitreihenwertkompakt)
 */
export class Zeitreihenwertkompakt {
  /**
   * Constructor.
   *
   * @param {number} wert
   * @param {Messwertstatus} status
   * @param {Messwertstatuszusatz} statuszusatz
   */
  constructor(public wert: number, public status?: Messwertstatus, public statuszusatz?: Messwertstatuszusatz) {
  }
}
