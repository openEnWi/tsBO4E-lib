import {Angebotsstatus} from 'enum/angebotsstatus.enum';
import {Angebotsteil} from 'com/angebotsteil';
import {Menge} from 'com/menge';
import {Betrag} from 'com/betrag';

/**
 * Führt die verschiedenen Ausprägungen der Angebotsberechnung auf.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Angebotsvariante](https://www.bo4e.de/dokumentation/komponenten/com-angebotsvariante)
 */
export class Angebotsvariante {
  /**
   * Constructor.
   *
   * @param {Angebotsstatus} angebotsstatus
   * @param {Set<Angebotsteil>} teile
   * @param {Date} erstelldatum
   * @param {Date} bindefrist
   * @param {string} beschreibung
   * @param {Menge} gesamtmenge
   * @param {Betrag} gesamtkosten
   */
  constructor(public angebotsstatus: Angebotsstatus,
              public teile: Array<Angebotsteil>,
              public erstelldatum: Date,
              public bindefrist: Date,
              public beschreibung?: string,
              public gesamtmenge?: Menge,
              public gesamtkosten?: Betrag,
  ) {
  }
}
