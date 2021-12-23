import {EnumLabels} from './util/enum-labels';

/**
 * Zur Differenzierung von Grund/Ersatzversorgungstarifen und sonstigen angebotenen Tarifen.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Tariftyp](https://www.bo4e.de/dokumentation/enumerations/enum-tariftyp)
 */
export enum Tariftyp {
    GRUND_ERSATZVERSORGUNG = 'GRUND_ERSATZVERSORGUNG',
    GRUNDVERSORGUNG = 'GRUNDVERSORGUNG',
    ERSATZVERSORGUNG = 'ERSATZVERSORGUNG',
    SONDERTARIF = 'SONDERTARIF',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Tariftyp}.
 */
export const TariftypLabel: EnumLabels<Tariftyp> = EnumLabels.of([
  [Tariftyp.GRUND_ERSATZVERSORGUNG, 'Grund- und Ersatzversorgung'],
  [Tariftyp.GRUNDVERSORGUNG, 'Grundversorgung'],
  [Tariftyp.ERSATZVERSORGUNG, 'Ersatzversorgung'],
  [Tariftyp.SONDERTARIF, 'Sondertarif'],
]);
