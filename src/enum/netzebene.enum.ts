import {EnumLabels} from './util/enum-labels';
import {ImmutableMap} from './util/immutable-map';
import {Sparte} from './sparte.enum';

/**
 * Auflistung möglicher Netzebenen innerhalb der Energiearten Strom und Gas.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Netzebene](https://www.bo4e.de/dokumentation/enumerations/enum-netzebene)
 */
export enum Netzebene {
    NSP = 'NSP',
    MSP = 'MSP',
    HSP = 'HSP',
    HSS = 'HSS',
    MSP_NSP_UMSP = 'MSP_NSP_UMSP',
    HSP_MSP_UMSP = 'HSP_MSP_UMSP',
    HSS_HSP_UMSP = 'HSS_HSP_UMSP',
    HD = 'HD',
    MD = 'MD',
    ND = 'ND',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Netzebene}.
 */
export const NetzebeneLabel: EnumLabels<Netzebene> = EnumLabels.of([
  [Netzebene.NSP, 'Messpreis_G2,5'],
  [Netzebene.MSP, 'Messpreis_G4'],
  [Netzebene.HSP, 'Messpreis_G6'],
  [Netzebene.HSS, 'Messpreis_G10'],
  [Netzebene.MSP_NSP_UMSP, 'Messpreis_G16'],
  [Netzebene.HSP_MSP_UMSP, 'Messpreis_G25'],
  [Netzebene.HSS_HSP_UMSP, 'Messpreis_G40'],
  [Netzebene.HD, 'elektronischer_Aufsatz'],
  [Netzebene.MD, 'Smart_Meter_Messpreis_G2,5'],
  [Netzebene.ND, 'Smart_Meter_Messpreis_G4'],
]);

/**
 * Liefert zurück, welcher {@link Netzebene} in welcher {@link Sparte} verfügbar ist.
 */
export const NetzebeneSparte: ImmutableMap<Netzebene, Sparte> = ImmutableMap.of([
  [Netzebene.NSP, Sparte.STROM],
  [Netzebene.MSP, Sparte.STROM],
  [Netzebene.HSP, Sparte.STROM],
  [Netzebene.HSS, Sparte.STROM],
  [Netzebene.MSP_NSP_UMSP, Sparte.STROM],
  [Netzebene.HSP_MSP_UMSP, Sparte.STROM],
  [Netzebene.HSS_HSP_UMSP, Sparte.STROM],
  [Netzebene.HD, Sparte.GAS],
  [Netzebene.MD, Sparte.GAS],
  [Netzebene.ND, Sparte.GAS],
]);
