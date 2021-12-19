import {EnumLabels} from './util/enum-labels';

/**
 * Unterscheidungsmöglichkeiten für die Sparte.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Sparte](https://www.bo4e.de/dokumentation/enumerations/enum-sparte)
 */
export enum Sparte {
    STROM = 'STROM',
    GAS = 'GAS',
    FERNWAERME = 'FERNWAERME',
    NAHWAERME = 'NAHWAERME',
    WASSER = 'WASSER',
    ABWASSER = 'ABWASSER',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Sparte}.
 */
export const SparteLabel: EnumLabels<Sparte> = EnumLabels.of([
  [Sparte.STROM, 'Strom'],
  [Sparte.GAS, 'Gas'],
  [Sparte.FERNWAERME, 'Fernwärme'],
  [Sparte.NAHWAERME, 'Nahwärme'],
  [Sparte.WASSER, 'Wasserversorgung'],
  [Sparte.ABWASSER, 'Abwasserentsorgung'],
]);
