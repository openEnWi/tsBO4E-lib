import {EnumLabels} from './util/enum-labels';

/**
 * Zur Abbildung von Messgrössen und zur Verwendung in energiewirtschaftlichen Berechnungen.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [ENUM Bemessungsgroesse](https://www.bo4e.de/dokumentation/enumerations/enum-bemessungsgroesse)
 */
export enum Bemessungsgroesse {
    WIRKARBEIT_EL = 'WIRKARBEIT_EL',
    LEISTUNG_EL = 'LEISTUNG_EL',
    BLINDARBEIT_KAP = 'BLINDARBEIT_KAP',
    BLINDARBEIT_IND = 'BLINDARBEIT_IND',
    BLINDLEISTUNG_KAP = 'BLINDLEISTUNG_KAP',
    BLINDLEISTUNG_IND = 'BLINDLEISTUNG_IND',
    WIRKARBEIT_TH = 'WIRKARBEIT_TH',
    LEISTUNG_TH = 'LEISTUNG_TH',
    VOLUMEN = 'VOLUMEN',
    VOLUMENSTROM = 'VOLUMENSTROM',
    BENUTZUNGSDAUER = 'BENUTZUNGSDAUER',
    ANZAHL = 'ANZAHL',
}

/**
 * Liefert kurze textuelle Repräsentationen einer {@link Bemessungsgroesse}.
 */
export const BemessungsgroesseLabel: EnumLabels<Bemessungsgroesse> = EnumLabels.of([
  [Bemessungsgroesse.WIRKARBEIT_EL, 'elektrische Wirkarbeit'],
  [Bemessungsgroesse.LEISTUNG_EL, 'elektrische Leistung'],
  [Bemessungsgroesse.BLINDARBEIT_KAP, 'Blindarbeit kapazitiv'],
  [Bemessungsgroesse.BLINDARBEIT_IND, 'Blindarbeit induktiv'],
  [Bemessungsgroesse.BLINDLEISTUNG_KAP, 'Blindleistung kapazitiv'],
  [Bemessungsgroesse.BLINDLEISTUNG_IND, 'Blindleistung induktiv'],
  [Bemessungsgroesse.WIRKARBEIT_TH, 'thermische Wirkarbeit'],
  [Bemessungsgroesse.LEISTUNG_TH, 'thermische Leistung'],
  [Bemessungsgroesse.VOLUMEN, 'Volumen'],
  [Bemessungsgroesse.VOLUMENSTROM, 'Volumenstrom (Volumen/Zeit)'],
  [Bemessungsgroesse.BENUTZUNGSDAUER, 'Benutzungsdauer (Arbeit/Leistung)'],
  [Bemessungsgroesse.ANZAHL, 'Darstellung einer Stückzahl'],
]);
