import {EnumLabels} from './util/enum-labels';

/**
 * Aufschlüsselung der Preistypen in Tarifen.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Preistyp](https://www.bo4e.de/dokumentation/enumerations/enum-preistyp)
 */
export enum Preistyp {
    GRUNDPREIS = 'GRUNDPREIS',
    ARBEITSPREIS_EINTARIF = 'ARBEITSPREIS_EINTARIF',
    ARBEITSPREIS_HT = 'ARBEITSPREIS_HT',
    ARBEITSPREIS_NT = 'ARBEITSPREIS_NT',
    LEISTUNGSPREIS = 'LEISTUNGSPREIS',
    MESSPREIS = 'MESSPREIS',
    ENTGELT_ABLESUNG = 'ENTGELT_ABLESUNG',
    ENTGELT_ABRECHNUNG = 'ENTGELT_ABRECHNUNG',
    ENTGELT_MSB = 'ENTGELT_MSB',
    PROVISION = 'PROVISION',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Preistyp}.
 */
export const PreistypLabel: EnumLabels<Preistyp> = EnumLabels.of([
  [Preistyp.GRUNDPREIS, 'Grundpreis'],
  [Preistyp.ARBEITSPREIS_EINTARIF, 'Arbeitspreis_ET'],
  [Preistyp.ARBEITSPREIS_HT, 'Arbeitspreis_HT'],
  [Preistyp.ARBEITSPREIS_NT, 'Arbeitspreis_NT'],
  [Preistyp.LEISTUNGSPREIS, 'Leistungspreis'],
  [Preistyp.MESSPREIS, 'Messpreis'],
  [Preistyp.ENTGELT_ABLESUNG, 'Entgelt fuer Ablesung'],
  [Preistyp.ENTGELT_ABRECHNUNG, 'Entgelt fuer Abrechnung'],
  [Preistyp.ENTGELT_MSB, 'Entgelt für MSB (Entgelt für Einbau, Betrieb und Wartung der Messtechnik)'],
  [Preistyp.PROVISION, 'Provision'],
]);
