import {TarifpreisstaffelProOrt} from 'com/tarifpreisstaffel-pro-ort';

/**
 * Mit dieser Komponente können Tarifpreise verschiedener Typen abgebildet werden.
 *
 * Version 2.0
 * veröffentlicht am 05. Oktober 2021
 *
 * @see [COM TarifpreispositionProOrt](https://www.bo4e.de/dokumentation/komponenten/com-tarifpreispositionproort)
 *
 */
export class TarifpreispositionProOrt {
  /**
   * Constructor.
   *
   * @param {string} postleitzahl Postleitzahl des Ortes für den der Preis gilt.
   * @param {string} ort Ort für den der Preis gilt.
   * @param {string} netznr ene't-Netznummer des Netzes in dem der Preis gilt.
   * @param {Array<TarifpreisstaffelProOrt>} preisstaffeln Hier sind die Staffeln mit ihren Preisenangaben definiert.
   *        Siehe COM TarifpreisstaffelProOrt
   */
  constructor(public postleitzahl: string,
              public ort: string,
              public netznr: string,
              public preisstaffeln: Array<TarifpreisstaffelProOrt>) {
  }
}
