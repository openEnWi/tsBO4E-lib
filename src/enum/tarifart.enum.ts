import {EnumLabels} from './util/enum-labels';

/**
 * Die Tarifart wird verwendet zur Charakterisierung von Zählern und daraus resultierenden Tarifen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Tarifart](https://www.bo4e.de/dokumentation/enumerations/enum-tarifart)
 */
export enum Tarifart {
    EINTARIF = 'EINTARIF',
    ZWEITARIF = 'ZWEITARIF',
    MEHRTARIF = 'MEHRTARIF',
    SMART_METER = 'SMART_METER',
    LEISTUNGSGEMESSEN = 'LEISTUNGSGEMESSEN',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Tarifart}.
 */
export const TarifartLabel: EnumLabels<Tarifart> = EnumLabels.of([
  [Tarifart.EINTARIF, 'Eintarif'],
  [Tarifart.ZWEITARIF, 'Zweitarif'],
  [Tarifart.MEHRTARIF, 'Mehrtarif'],
  [Tarifart.SMART_METER, 'Smart Meter Tarif'],
  [Tarifart.LEISTUNGSGEMESSEN, 'Leistungsgemessener Tarif'],
]);
