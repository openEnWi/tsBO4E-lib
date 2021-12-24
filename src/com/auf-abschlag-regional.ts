import {AufAbschlagProOrt} from 'com/auf-abschlag-pro-ort';
import {Energiemix} from 'com/energiemix';
import {Zeitraum} from 'com/zeitraum';
import {AufAbschlagsziel} from 'enum/auf-abschlagsziel.enum';
import {AufAbschlagstyp} from 'enum/auf-abschlagstyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Preisgarantie} from 'com/preisgarantie';
import {Vertragskonditionen} from 'com/vertragskonditionen';
import {Tarifeinschraenkung} from 'com/tarifeinschraenkung';

/**
 * Mit dieser Komponente können Auf- und Abschläge verschiedener Typen
 * im Zusammenhang mit regionalen Gültigkeiten abgebildet werden.
 *
 * Hier sind auch die Auswirkungen auf verschiedene Tarifparameter modelliert,
 * die sich durch die Auswahl eines Auf- oder Abschlags ergeben.
 *
 * veröffentlicht am 12. Dezember 2018
 *
 * @see [COM AufAbschlagRegional](https://www.bo4e.de/dokumentation/komponenten/com-aufabschlagregional)
 */
export class AufAbschlagRegional {
  /**
   * Constructor.
   *
   * @param {string} bezeichnung
   * @param {Array<AufAbschlagProOrt>} betraege
   * @param {Array<string>} zusatzprodukte
   * @param {Array<string>} voraussetzungen
   * @param {Array<Tarifeinschraenkung>} einschraenkungsaenderung
   * @param {Preisgarantie} garantieaenderung
   * @param {AufAbschlagstyp} aufAbschlagstyp
   * @param {AufAbschlagsziel} aufAbschlagsziel
   * @param {Waehrungseinheit} einheit
   * @param {string} website
   * @param {string} beschreibung
   * @param {string} tarifnamensaenderungen
   * @param {Energiemix} energiemixaenderung
   * @param {Vertragskonditionen} vertagskonditionsaenderung
   * @param {Zeitraum} gueltigkeitszeitraum
   */
  constructor(public bezeichnung: string,
              public betraege: Array<AufAbschlagProOrt>,
              public zusatzprodukte: Array<string>,
              public voraussetzungen: Array<string>,
              public einschraenkungsaenderung: Array<Tarifeinschraenkung>,
              public garantieaenderung: Preisgarantie,
              public aufAbschlagstyp?: AufAbschlagstyp,
              public aufAbschlagsziel?: AufAbschlagsziel,
              public einheit?: Waehrungseinheit,
              public website?: string,
              public beschreibung?: string,
              public tarifnamensaenderungen?: string,
              public energiemixaenderung?: Energiemix,
              public vertagskonditionsaenderung?: Vertragskonditionen,
              public gueltigkeitszeitraum?: Zeitraum,
  ) {

  }
}
