export interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

/**
 * Diese Klasse ermöglicht das Erstellen einer unveränderlichen Map von Key-Value-Paaren vom Typ Key=E und Value=V
 */
export class ImmutableMap<K, V> {
  private readonly entries: Map<K, V>;
  private readonly keyValuePairs: Array<KeyValuePair<K, V>>;

  /**
   * Constructor.
   *
   * @param {[K, V][]} entries Einträge, welche der ImmutableMap-Instanz zu Verfügung stehen sollen.
   * @private
   */
  protected constructor(entries: [K, V][]) {
    this.entries = new Map<K, V>(entries);
    this.keyValuePairs = [...this.entries].map((entry) => ({
      key: entry[0],
      value: entry[1],
    }));
  }

  /**
   * Ermöglicht das Erstellen einer ImmutableMap Instanz.
   * @param {[K, V][]} entries Einträge, welche für die ImmutableMap-Instanz verfügbar sein sollen.
   * @return {ImmutableMap<K, V>} ImmutableMap-Instanz mit den definierten Values.
   */
  public static of<K, V>(entries: [K, V][]): ImmutableMap<K, V> {
    return new ImmutableMap<K, V>(entries);
  }

  /**
   * Ermöglicht das Abrufen einer Value für einen bestimmten Key.
   * @param {E} key Key, für welchen die Value ermittelt werden soll.
   * @return {V | undefined} Values des Keys bzw. undefined, sollte der Key nicht bekannt sein.
   */
  public getValue(key: K): V | undefined {
    return this.entries.has(key) ? this.entries.get(key) : undefined;
  }

  /**
   * Liefert alle definierten Key-Value-Kombinationen zurück.
   * @return {Array<KeyValuePair<K, V>>} Array der Key-Value Paare.
   */
  public getAll(): Array<KeyValuePair<K, V>> {
    return [...this.keyValuePairs];
  }
}
