/**
 * Mit dieser Komponente werden Messlokationen zu Marktlokationen zugeordnet.
 *
 * Dabei kann eine arithmetische Operation (Addition, Subtraktion) angegeben werden,
 * mit der die Messlokation zum Verbrauch der Marklokation beiträgt.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [COM Messlokationszuordnung](https://www.bo4e.de/dokumentation/komponenten/com-messlokationszuordnung)
 */
export class Messlokationszuordnung {
  /**
   * Constructor.
   *
   * @param {string} messlokationsId
   * @param {Date} gueltigSeit
   * @param {Date} gueltigBis
   */
  constructor(public messlokationsId: string, public gueltigSeit: Date, public gueltigBis: Date) {
  }
}
