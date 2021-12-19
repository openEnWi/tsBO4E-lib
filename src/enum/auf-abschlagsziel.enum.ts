import {EnumLabels} from './util/enum-labels';

/**
 * Der Preis, auf den sich ein Auf- oder Abschlag bezieht.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM AufAbschlagsziel](https://www.bo4e.de/dokumentation/enumerations/enum-aufabschlagsziel)
 */
export enum AufAbschlagsziel {
    ARBEITSPREIS_EINTARIF = 'ARBEITSPREIS_EINTARIF',
    ARBEITSPREIS_HT = 'ARBEITSPREIS_HT',
    ARBEITSPREIS_NT = 'ARBEITSPREIS_NT',
    ARBEITSPREIS_HT_NT = 'ARBEITSPREIS_HT_NT',
    GRUNDPREIS = 'GRUNDPREIS',
    GESAMTPREIS = 'GESAMTPREIS',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link AufAbschlagsziel}.
 */
export const AufAbschlagszielLabel: EnumLabels<AufAbschlagsziel> = EnumLabels.of([
  [AufAbschlagsziel.ARBEITSPREIS_EINTARIF, 'Auf/Abschlag auf den Arbeitspreis Eintarif'],
  [AufAbschlagsziel.ARBEITSPREIS_HT, 'Auf/Abschlag auf den Arbeitspreis HT'],
  [AufAbschlagsziel.ARBEITSPREIS_NT, 'Auf/Abschlag auf den Arbeitspreis NT'],
  [AufAbschlagsziel.ARBEITSPREIS_HT_NT, 'Auf/Abschlag auf den Arbeitspreis HT und NT'],
  [AufAbschlagsziel.GRUNDPREIS, 'Auf/Abschlag auf den Grundpreis'],
  [AufAbschlagsziel.GESAMTPREIS, 'Auf/Abschlag auf den Gesamtpreis'],
]);
