import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der Labels für Öko-Strom von verschiedenen Herausgebern.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Oekolabel](https://www.bo4e.de/dokumentation/enumerations/enum-oekolabel)
 */
export enum Oekolabel {
    ENERGREEN = 'ENERGREEN',
    GASGREEN_GRUENER_STROM = 'GASGREEN_GRUENER_STROM',
    GASGREEN = 'GASGREEN',
    GRUENER_STROM_GOLD = 'GRUENER_STROM_GOLD',
    GRUENER_STROM_SILBER = 'GRUENER_STROM_SILBER',
    GRUENER_STROM = 'GRUENER_STROM',
    GRUENES_GAS = 'GRUENES_GAS',
    NATURWATT_STROM = 'NATURWATT_STROM',
    OK_POWER = 'OK_POWER',
    RENEWABLE_PLUS = 'RENEWABLE_PLUS',
    WATERGREEN = 'WATERGREEN',
    WATERGREEN_PLUS = 'WATERGREEN_PLUS',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link NnRechnungstyp}.
 */
export const OekolabelLabel: EnumLabels<Oekolabel> = EnumLabels.of([
  [Oekolabel.ENERGREEN, 'energreen'],
  [Oekolabel.GASGREEN_GRUENER_STROM, 'energreen (durch Gruener Strom Label)'],
  [Oekolabel.GASGREEN, 'gasgreen'],
  [Oekolabel.GRUENER_STROM_GOLD, 'Gruener Strom Label Gold'],
  [Oekolabel.GRUENER_STROM_SILBER, 'Gruener Strom Label Silber'],
  [Oekolabel.GRUENER_STROM, 'Gruener Strom Label'],
  [Oekolabel.GRUENES_GAS, 'Gruenes Gas Label'],
  [Oekolabel.NATURWATT_STROM, 'NaturWatt Strom'],
  [Oekolabel.OK_POWER, 'ok-Power'],
  [Oekolabel.RENEWABLE_PLUS, 'RenewablePLUS'],
  [Oekolabel.WATERGREEN, 'Watergreen'],
  [Oekolabel.WATERGREEN_PLUS, 'Watergreen+'],
]);
