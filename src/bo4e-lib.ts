/**
 * Hauptklasse der BO4E-Typescript Library, welche Informationen zur BO4E-Version bereitstellt.
 */
export class Bo4eLib {
  /** Aktuelle Version des implementierten BO4E-Standards */
  public static readonly VERSION = 11;

  /**
   * Liefert die Version des aktuell implementierten BO4E Standards zurück.
   * @return {number} BO4ELib Version
   */
  public getVersion(): number {
    return Bo4eLib.VERSION;
  }
}
