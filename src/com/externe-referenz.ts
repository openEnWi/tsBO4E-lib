/**
 * Viele Datenobjekte weisen in unterschiedlichen Systemen eine eindeutige ID (Kundennummer, GP-Nummer etc.) auf.
 *
 * Beim Austausch von Datenobjekten zwischen verschiedenen Systemen ist es daher hilfreich,
 * sich die eindeutigen IDs der anzubindenden Systeme zu merken.
 * Diese Komponente ermöglicht es, sich die SAP GP-Nummer zu merken,
 * um diese bei SAP-Aufrufen als Parameter mitgeben zu können.
 *
 * veröffentlicht am 10. Oktober 2020
 *
 * @see [COM ExterneReferenz](https://www.bo4e.de/dokumentation/komponenten/com-externereferenz)
 */
export class ExterneReferenz {
  /**
   * Constructor.
   *
   * @param {string} exRefName Name des referenzierten Wertes.
   * @param {string} exRefWert Inhalt des referenzierten Wertes.
   */
  constructor(public exRefName: string, public exRefWert: string) {
  }
}
