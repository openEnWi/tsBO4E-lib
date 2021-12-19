import {EnumLabels} from './util/enum-labels';

/**
 * Unterscheidung für hoch- und niedrig-kalorisches Gas.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Gasqualitaet](https://www.bo4e.de/dokumentation/enumerations/enum-gasqualitat)
 */
export enum Gasqualitaet {
    H_GAS = 'H_GAS',
    L_GAS = 'L_GAS',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Gasqualitaet}.
 */
export const GasqualitaetLabel: EnumLabels<Gasqualitaet> = EnumLabels.create([
  [Gasqualitaet.H_GAS, 'High Caloric Gas'],
  [Gasqualitaet.L_GAS, 'Low Caloric Gas'],
]);
