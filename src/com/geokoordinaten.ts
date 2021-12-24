/**
 * Diese Komponente liefert die Geokoordinaten für einen Ort.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Geokoordinaten](https://www.bo4e.de/dokumentation/komponenten/com-geokoordinaten)
 */
export class Geokoordinaten {
  /**
   * Constructor.
   *
   * @param {number} breitengrad
   * @param {number} laengengrad
   */
  constructor(public breitengrad: number, public laengengrad: number) {
  }
}
