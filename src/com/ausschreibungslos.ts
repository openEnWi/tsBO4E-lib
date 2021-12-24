import {Preismodell} from 'enum/preismodell.enum';
import {Sparte} from 'enum/sparte.enum';
import {Rechnungslegung} from 'enum/rechnungslegung.enum';
import {Vertragsform} from 'enum/vertragsform.enum';
import {Ausschreibungsdetail} from 'com/ausschreibungsdetail';
import {Zeitraum} from 'com/zeitraum';
import {Menge} from 'com/menge';

/**
 * Eine Komponente zur Abbildung einzelner Lose einer Ausschreibung.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [COM Ausschreibungslos](https://www.bo4e.de/dokumentation/komponenten/com-ausschreibungslos)
 */
export class Ausschreibungslos {
  /**
   * Constructor.
   *
   * @param {string} losnummer
   * @param {string} bezeichnung
   * @param {Preismodell} preismodell
   * @param {Sparte} energieart
   * @param {Rechnungslegung} wunschRechnungelegung
   * @param {Vertragsform} wunschVertragsform
   * @param {string} betreutDurch
   * @param {number} anzahlLieferstellen
   * @param {Array<Ausschreibungsdetail>} lieferstellen
   * @param {Zeitraum} lieferzeitraum
   * @param {Zeitraum} wunschKuendigungsfrist
   * @param {Zeitraum} wunschZahlungsziel
   * @param {string} bemerkung
   * @param {Menge} gesamtmenge
   * @param {Menge} wunschMindestmenge
   * @param {Menge} wunschMaximalmenge
   */
  constructor(public losnummer: string,
              public bezeichnung: string,
              public preismodell: Preismodell,
              public energieart: Sparte,
              public wunschRechnungelegung: Rechnungslegung,
              public wunschVertragsform: Vertragsform,
              public betreutDurch: string,
              public anzahlLieferstellen: number,
              public lieferstellen: Array<Ausschreibungsdetail>,
              public lieferzeitraum: Zeitraum,
              public wunschKuendigungsfrist: Zeitraum,
              public wunschZahlungsziel: Zeitraum,
              public bemerkung?: string,
              public gesamtmenge?: Menge,
              public wunschMindestmenge?: Menge,
              public wunschMaximalmenge?: Menge) {
  }
}
