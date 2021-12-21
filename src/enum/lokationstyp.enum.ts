import {EnumLabels} from './util/enum-labels';

/**
 * Gibt an, ob es sich um eine Markt- oder Messlokation handelt.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Lokationstyp](https://www.bo4e.de/dokumentation/enumerations/enum-lokationstyp)
 */
export enum Lokationstyp {
    MaLo = 'MaLo',
    MeLo = 'MeLo',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Lokationstyp}.
 */
export const LokationstypLabel: EnumLabels<Lokationstyp> = EnumLabels.of([
  [Lokationstyp.MaLo, 'Marktlokation'],
  [Lokationstyp.MeLo, 'Messlokation'],
]);
