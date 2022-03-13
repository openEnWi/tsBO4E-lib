import {EnumLabels} from './util/enum-labels';

/**
 * Unterscheidungsmöglichkeiten für die Sparte.
 *
 * veröffentlicht am 02. März 2022
 *
 * @see [ENUM Sparte](https://www.bo4e.de/dokumentation/enumerations/enum-sparte/02-03-2022)
 */
export enum Sparte {
  STROM = 'STROM',
  GAS = 'GAS',
  FERNWAERME = 'FERNWAERME',
  NAHWAERME = 'NAHWAERME',
  WASSER = 'WASSER',
  ABWASSER = 'ABWASSER',
  STROM_UND_GAS = 'STROM_UND_GAS'
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
  [Sparte.STROM_UND_GAS, 'Strom und Gas'],
]);
