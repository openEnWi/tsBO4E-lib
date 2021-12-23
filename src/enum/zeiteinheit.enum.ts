import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung möglicher Einheiten zur Verwendung in zeitbezogenen Angaben.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Zeiteinheit](https://www.bo4e.de/dokumentation/enumerations/enum-zeiteinheit)
 */
export enum Zeiteinheit {
    SEKUNDE = 'SEKUNDE',
    MINUTE = 'MINUTE',
    STUNDE = 'STUNDE',
    VIERTEL_STUNDE = 'VIERTEL_STUNDE',
    TAG = 'TAG',
    WOCHE = 'WOCHE',
    MONAT = 'MONAT',
    QUARTAL = 'QUARTAL',
    HALBJAHR = 'HALBJAHR',
    JAHR = 'JAHR',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Zeiteinheit}.
 */
export const ZeiteinheitLabel: EnumLabels<Zeiteinheit> = EnumLabels.of([
  [Zeiteinheit.SEKUNDE, 'Sekunde'],
  [Zeiteinheit.MINUTE, 'Minute'],
  [Zeiteinheit.STUNDE, 'Stunde'],
  [Zeiteinheit.VIERTEL_STUNDE, 'Viertelstunde'],
  [Zeiteinheit.TAG, 'Tag'],
  [Zeiteinheit.WOCHE, 'Woche'],
  [Zeiteinheit.MONAT, 'Monat'],
  [Zeiteinheit.QUARTAL, 'Quartal'],
  [Zeiteinheit.HALBJAHR, 'Halbjahr'],
  [Zeiteinheit.JAHR, 'Jahr'],
]);
