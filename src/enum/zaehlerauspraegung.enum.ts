import {EnumLabels} from './util/enum-labels';

/**
 * Gibt an, ob es sich um einen Einrichtungs- oder Zweirichtungszähler handelt.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Zaehlerauspraegung](https://www.bo4e.de/dokumentation/enumerations/enum-zahlerauspragung)
 */
export enum Zaehlerauspraegung {
    EINRICHTUNGSZAEHLER = 'EINRICHTUNGSZAEHLER',
    ZWEIRICHTUNGSZAEHLER = 'ZWEIRICHTUNGSZAEHLER',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Zaehlerauspraegung}.
 */
export const ZaehlerauspraegungLabel: EnumLabels<Zaehlerauspraegung> = EnumLabels.of([
  [Zaehlerauspraegung.EINRICHTUNGSZAEHLER, 'Prognose'],
  [Zaehlerauspraegung.ZWEIRICHTUNGSZAEHLER, 'Messung'],
]);
