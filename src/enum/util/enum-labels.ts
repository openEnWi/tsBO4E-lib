/**
 * Diese Klasse ermöglicht das zuweisen und abrufen von Labels für einen Wert in einem Enum vom Typ T,
 * als weitere Information.
 */
export class EnumLabels<T> {
  private readonly labels: Map<T, string>;

  /**
   * Constructor.
   * @param {[T, string][]} entries Einträge, welche der EnumLabel-Instanz zu Verfügung stehen sollen.
   * @private
   */
  private constructor(entries: [T, string][]) {
    this.labels = new Map<T, string>(entries);
  }

  /**
   * Ermöglicht das erstellen einer EnumLabels Instanz für ein bestimmtes Enum.
   * @param {[T, string][]} entries Einträge, welche für die EnumLabels-Instanz verfügbar sein sollen.
   * @return {EnumLabels<T>} EnumLabels-Instanz mit den definierten Labels.
   */
  public static create<T>(entries: [T, string][]): EnumLabels<T> {
    return new EnumLabels<T>(entries);
  }

  /**
   * Ermöglicht das Abrufen eines Labels für einen bestimmten Enum-Wert.
   * @param {T} enumValue Enum-Wert, für welchen das Label ermittelt werden soll.
   * @return {string | undefined} Label des Enum-Wertes bzw. undefined, sollte hierzu kein Label bekannt sein.
   */
  public getLabel(enumValue: T): string | undefined {
    return this.labels.has(enumValue) ? this.labels.get(enumValue) : undefined;
  }
}
