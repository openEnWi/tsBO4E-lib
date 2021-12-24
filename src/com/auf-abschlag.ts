import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {AufAbschlagstyp} from 'enum/auf-abschlagstyp.enum';
import {AufAbschlagsziel} from 'enum/auf-abschlagsziel.enum';
import {Preisstaffel} from 'com/preisstaffel';
import {Zeitraum} from 'com/zeitraum';

/**
 * Modell für die preiserhöhenden (Aufschlag) bzw. preisvermindernden (Abschlag) Zusatzvereinbarungen,
 * die individuell zu einem neuen oder bestehenden Liefervertrag abgeschlossen wurden.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM AufAbschlag](https://www.bo4e.de/dokumentation/komponenten/com-aufabschlag)
 */
export class AufAbschlag {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Waehrungseinheit} einheit
   * @param {Set<Preisstaffel>} staffeln
   * @param {AufAbschlagstyp} aufAbschlagstyp
   * @param {AufAbschlagstyp} aufAbschlagsziel
   * @param {Zeitraum} gueltigkeitszeitraum
   * @param {string} website
   */
  constructor(public bezeichnung: string,
              public einheit: Waehrungseinheit,
              public staffeln: Set<Preisstaffel>,
              public aufAbschlagstyp?: AufAbschlagstyp,
              public aufAbschlagsziel?: AufAbschlagsziel,
              public gueltigkeitszeitraum?: Zeitraum,
              public website?: string) {
  }
}
