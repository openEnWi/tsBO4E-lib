/**
 * Gibt den Wert eines Auf- oder Abschlags und dessen Staffelgrenzen an.
 *
 * veröffentlicht am 12. Dezember 2018
 *
 * @see [COM AufAbschlagstaffelProOrt](https://www.bo4e.de/dokumentation/komponenten/com-aufabschlagstaffelproort)
 */
export class AufAbschlagstaffelProOrt {
  /**
   * Constructor.
   *
   * @param {number} wert Der Wert für den Auf- oder Abschlag.
   * @param {number} staffelgrenzeVon Unterer Wert, ab dem die Staffel gilt.
   * @param {number} staffelgrenzeBis Oberer Wert, bis zu dem die Staffel gilt.
   */
  constructor(public wert: number,
              public staffelgrenzeVon: number,
              public staffelgrenzeBis: number) {
  }
}
