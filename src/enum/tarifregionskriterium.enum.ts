import {EnumLabels} from './util/enum-labels';

/**
 * Mit diesen Kriterien können regionale Bereiche definiert werden.
 *
 * Version 1.1
 * veröffentlicht am 01. Oktober 2021
 *
 * @see [ENUM Tarifregionskriterium](https://www.bo4e.de/dokumentation/enumerations/enum-tarifregionskriterium)
 */
export enum Tarifregionskriterium {
    NETZ_NUMMER = 'NETZ_NUMMER',
    POSTLEITZAHL = 'POSTLEITZAHL',
    ORT = 'ORT',
    GRUNDVERSORGER_NUMMER = 'GRUNDVERSORGER_NUMMER',
    REGION = 'REGION',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Tarifregionskriterium}.
 */
export const TarifregionskriteriumLabel: EnumLabels<Tarifregionskriterium> = EnumLabels.of([
  [Tarifregionskriterium.NETZ_NUMMER, 'Netznummer'],
  [Tarifregionskriterium.POSTLEITZAHL, 'Postleitzahl'],
  [Tarifregionskriterium.ORT, 'Ort'],
  [Tarifregionskriterium.GRUNDVERSORGER_NUMMER, 'Nummer des Grundversorgers'],
  [Tarifregionskriterium.REGION, 'Referenz auf ein BO Region (URL)'],
]);
