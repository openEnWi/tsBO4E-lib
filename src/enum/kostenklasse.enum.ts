import {EnumLabels} from './util/enum-labels';

/**
 * Kostenklassen bilden die oberste Ebene der verschiedenen Kosten.
 * In der Regel werden die Gesamtkosten einer Kostenklasse in einer App berechnet.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Kostenklasse](https://www.bo4e.de/dokumentation/enumerations/enum-kostenklasse)
 */
export enum Kostenklasse {
    FREMDKOSTEN = 'FREMDKOSTEN',
    BESCHAFFUNG = 'BESCHAFFUNG',
    SELBSTKOSTEN = 'SELBSTKOSTEN',
    MARGEN = 'MARGEN',
    ENERGIEVERSORGUNGSKOSTEN = 'ENERGIEVERSORGUNGSKOSTEN',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Kostenklasse}.
 */
export const KostenklasseLabel: EnumLabels<Kostenklasse> = EnumLabels.of([
  [Kostenklasse.FREMDKOSTEN, 'Fremdkosten'],
  [Kostenklasse.BESCHAFFUNG, 'Beschaffung'],
  [Kostenklasse.SELBSTKOSTEN, 'Selbstkosten'],
  [Kostenklasse.MARGEN, 'Margen'],
  [Kostenklasse.ENERGIEVERSORGUNGSKOSTEN, 'Energieversorgungskosten'],
]);
