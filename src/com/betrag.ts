import {Waehrungscode} from 'enum/waehrungscode.enum';

/**
 * Die Komponente wird dazu verwendet,
 * Summebeträge - beispielsweise in Angeboten und Rechnungen - als Geldbeträge abzubilden.
 * Die Einheit ist dabei immer die Hauptwährung also Euro, Dollar etc..
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Betrag](https://www.bo4e.de/dokumentation/komponenten/com-betrag)
 */
export class Betrag {
  /**
   * Constructor.
   * @param {number} wert Wert / Höhe des Betrages
   * @param {Waehrungscode} waehrung Währung des Betrages
   */
  constructor(public wert: number, public waehrung: Waehrungscode) {
  }
}
