import {EnumLabels} from './util/enum-labels';

/**
 * Spezifiziert die Energierichtung einer Markt- und/oder Messlokation.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Energierichtung](https://www.bo4e.de/dokumentation/enumerations/enum-energierichtung)
 */
export enum Energierichtung {
    AUSSP = 'AUSSP',
    EINSP = 'EINSP',
}

/**
 * Liefert kurze textuelle Repräsentationen einer {@link Energierichtung}.
 */
export const EnergierichtungLabel: EnumLabels<Energierichtung> = EnumLabels.of([
  [Energierichtung.AUSSP, 'Ausspeisung'],
  [Energierichtung.EINSP, 'Einspeisung'],
]);
