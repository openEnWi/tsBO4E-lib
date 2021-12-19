import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung der Erzeugungsarten von Energie.
 *
 * Version 1.1
 * veröffentlicht am 30. Juni 2021
 *
 * @see [ENUM Erzeugungsart](https://www.bo4e.de/dokumentation/enumerations/enum-erzeugungsart/enum-erzeugungsart-1)
 */
export enum Erzeugungsart {
    FOSSIL= 'FOSSIL',
    KWK= 'KWK',
    WIND= 'WIND',
    SOLAR= 'SOLAR',
    KERNKRAFT= 'KERNKRAFT',
    WASSER= 'WASSER',
    GEOTHERMIE= 'GEOTHERMIE',
    BIOMASSE= 'BIOMASSE',
    KOHLE= 'KOHLE',
    GAS= 'GAS',
    SONSTIGE= 'SONSTIGE',
    SONSTIGE_EEG= 'SONSTIGE_EEG',
    BIOGAS= 'BIOGAS',
    KLIMANEUTRALES_GAS= 'KLIMANEUTRALES_GAS',
}

/**
 * Liefert kurze textuelle Repräsentationen einer {@link Erzeugungsart}.
 */
export const ErzeugungsartLabel: EnumLabels<Erzeugungsart> = EnumLabels.of([
  [Erzeugungsart.FOSSIL, 'Fossile Brennstoffe'],
  [Erzeugungsart.KWK, 'Kraft-Waerme-Koppelung'],
  [Erzeugungsart.WIND, 'Windkraft'],
  [Erzeugungsart.SOLAR, 'Solarenergie'],
  [Erzeugungsart.KERNKRAFT, 'Kernkraft'],
  [Erzeugungsart.WASSER, 'Wasserkraft'],
  [Erzeugungsart.GEOTHERMIE, 'Geothermie'],
  [Erzeugungsart.BIOMASSE, 'Biomasse'],
  [Erzeugungsart.KOHLE, 'Kohle'],
  [Erzeugungsart.GAS, 'Erdgas'],
  [Erzeugungsart.SONSTIGE, 'Sonstige'],
  [Erzeugungsart.SONSTIGE_EEG, 'Sonstige nach EEG'],
  [Erzeugungsart.BIOGAS, 'Biogas'],
  [Erzeugungsart.KLIMANEUTRALES_GAS, 'Klimaneutrales Erdgas'],
]);
