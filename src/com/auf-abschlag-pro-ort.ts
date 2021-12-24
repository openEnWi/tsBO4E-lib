import {AufAbschlagstaffelProOrt} from 'com/auf-abschlagstaffel-pro-ort';

/**
 * Mit dieser Komponente können Auf- und Abschläge verschiedener Typen
 * im Zusammenhang mit örtlichen Gültigkeiten abgebildet werden.
 *
 * Version 2.0
 * veröffentlicht am 05. Oktober 2021
 *
 * @see [COM AufAbschlagProOrt](https://www.bo4e.de/dokumentation/komponenten/com-aufabschlagproort/5-10-2021)
 */
export class AufAbschlagProOrt {
  /**
   * Constructor.
   *
   * @param {string} postleitzahl Die Postleitzahl des Ortes für den der Aufschlag gilt.
   * @param {string} ort Der Ort für den der Aufschlag gilt.
   * @param {string} netznr Die ene't-Netznummer des Netzes in dem der Aufschlag gilt.
   * @param {Set<AufAbschlagstaffelProOrt>} staffeln Werte für die gestaffelten Auf/Abschläge
   *        mit regionaler Eingrenzung.
   */
  constructor(public postleitzahl: string,
              public ort: string,
              public netznr: string,
              public staffeln: Set<AufAbschlagstaffelProOrt>) {
  }
}
