import {Zeitraum} from 'com/zeitraum';
import {Tarifeinschraenkung} from 'com/tarifeinschraenkung';
import {AufAbschlagstyp} from 'enum/auf-abschlagstyp.enum';
import {AufAbschlagsziel} from 'enum/auf-abschlagsziel.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Preisgarantie} from 'com/preisgarantie';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {Energiemix} from 'com/energiemix';
import {RegionalePreisstaffel} from 'com/regionale-preisstaffel';

/**
 * Mit dieser Komponente können Auf- und Abschläge verschiedener Typen
 * im Zusammenhang mit regionalen Gültigkeiten abgebildet werden.
 *
 * Hier sind auch die Auswirkungen auf verschiedene Tarifparameter modelliert,
 * die sich durch die Auswahl eines Auf- oder Abschlags ergeben.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [COM RegionalerAufAbschlag](https://www.bo4e.de/dokumentation/komponenten/com-regionaleraufabschlag)
 */
export class RegionalerAufAbschlag {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Set<string>} zusatzprodukte
   * @param {Set<string>} voraussetzungen
   * @param {Zeitraum} gueltigkeitszeitraum
   * @param {Set<string>} tarifnamensaenderungen
   * @param {Tarifeinschraenkung} einschraenkungsaenderung
   * @param {Set<RegionalePreisstaffel>} staffeln
   * @param {string} beschreibung
   * @param {AufAbschlagstyp} aufAbschlagstyp
   * @param {AufAbschlagsziel} aufAbschlagsziel
   * @param {Waehrungseinheit} einheit
   * @param {string} website
   * @param {Energiemix} energiemixaenderung
   * @param {Vertragskonditionen} vertagskonditionsaenderung
   * @param {Preisgarantie} garantieaenderung
   */
  constructor(public bezeichnung: string,
              public zusatzprodukte: Set<string>,
              public voraussetzungen: Set<string>,
              public gueltigkeitszeitraum: Zeitraum,
              public tarifnamensaenderungen: Set<string>,
              public einschraenkungsaenderung: Tarifeinschraenkung,
              public staffeln: Set<RegionalePreisstaffel>,
              public beschreibung?: string,
              public aufAbschlagstyp?: AufAbschlagstyp,
              public aufAbschlagsziel?: AufAbschlagsziel,
              public einheit?: Waehrungseinheit,
              public website?: string,
              public energiemixaenderung?: Energiemix,
              public vertagskonditionsaenderung?: Vertragskonditionen,
              public garantieaenderung?: Preisgarantie,
  ) {
  }
}
