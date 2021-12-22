import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der Möglichkeiten für die Vergabe von Preisgarantien
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Preisgarantietyp](https://www.bo4e.de/dokumentation/enumerations/enum-preisgarantietyp)
 */
export enum Preisgarantietyp {
    ALLE_PREISBESTANDTEILE_BRUTTO = 'ALLE_PREISBESTANDTEILE_BRUTTO',
    ALLE_PREISBESTANDTEILE_NETTO = 'ALLE_PREISBESTANDTEILE_NETTO',
    PREISBESTANDTEILE_OHNE_ABGABEN = 'PREISBESTANDTEILE_OHNE_ABGABEN',
    NUR_ENERGIEPREIS = 'NUR_ENERGIEPREIS',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Preisgarantietyp}.
 */
export const PreisgarantietypLabel: EnumLabels<Preisgarantietyp> = EnumLabels.of([
  [
    Preisgarantietyp.ALLE_PREISBESTANDTEILE_BRUTTO,
    'Der Versorger gewährt eine Preisgarantie auf alle Preisbestandteile',
  ],
  [
    Preisgarantietyp.ALLE_PREISBESTANDTEILE_NETTO,
    'Der Versorger gewährt eine Preisgarantie auf alle Preisbestandteile ohne die Umsatzsteuer',
  ],
  [
    Preisgarantietyp.PREISBESTANDTEILE_OHNE_ABGABEN,
    // eslint-disable-next-line max-len
    'Der Versorger gewährt eine Preisgarantie auf alle Preisbestandteile ohne Abgaben (Energiesteuern, Umlagen, Abgaben)',
  ],
  [Preisgarantietyp.NUR_ENERGIEPREIS, 'Der Versorger garantiert ausschließlich den Energiepreis'],
]);
