import {EnumLabels} from './util/enum-labels';

/**
 * Übersicht der verschiedenen Gültigkeiten zur Umsetzung von Positiv- bzw. Negativlisten.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Gueltigkeitstyp](https://www.bo4e.de/dokumentation/enumerations/enum-gueltigkeitstyp)
 */
export enum Gueltigkeitstyp {
    NUR_IN = 'NUR_IN',
    NICHT_IN = 'NICHT_IN',
    NUR_IN_KOMBINATION_MIT = 'NUR_IN_KOMBINATION_MIT',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Gueltigkeitstyp}.
 */
export const GueltigkeitstypLabel: EnumLabels<Gueltigkeitstyp> = EnumLabels.of([
  [Gueltigkeitstyp.NUR_IN, 'Ein so eingeschränktes Merkmal gilt nur mit den angebenen Werten'],
  [Gueltigkeitstyp.NICHT_IN, 'Ein so eingeschränktes Merkmal gilt nicht mit den angebenen Werten'],
  [Gueltigkeitstyp.NUR_IN_KOMBINATION_MIT, 'Die Kriterien mit diesem Gültigkeitstyp werden miteinander kombiniert'],
]);
