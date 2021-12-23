import {EnumLabels} from './util/enum-labels';

/**
 * Bei diesem Enum handelt es sich die Abbildung von Zählertypen der Sparten Strom und Gas.
 *
 * Version 1.1
 * veröffentlicht am 31. Mai 2021
 *
 * @see [ENUM Zaehlertyp](https://www.bo4e.de/dokumentation/enumerations/enum-zahlertyp/31-05-2021)
 */
export enum Zaehlertyp {
    DREHSTROMZAEHLER = 'DREHSTROMZAEHLER',
    BALGENGASZAEHLER = 'BALGENGASZAEHLER',
    DREHKOLBENZAEHLER = 'DREHKOLBENZAEHLER',
    SMARTMETER = 'SMARTMETER',
    LEISTUNGSZAEHLER = 'LEISTUNGSZAEHLER',
    MAXIMUMZAEHLER = 'MAXIMUMZAEHLER',
    TURBINENRADGASZAEHLER = 'TURBINENRADGASZAEHLER',
    ULTRASCHALLGASZAEHLER = 'ULTRASCHALLGASZAEHLER',
    WECHSELSTROMZAEHLER = 'WECHSELSTROMZAEHLER',
    BALGENGASZAEHLER_EDL_21 = 'BALGENGASZAEHLER_EDL_21',
    BALGENGASZAEHLER_EDL_40 = 'BALGENGASZAEHLER_EDL_40',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Zaehlertyp}.
 */
export const ZaehlertypLabel: EnumLabels<Zaehlertyp> = EnumLabels.of([
  [Zaehlertyp.DREHSTROMZAEHLER, 'Drehstromzähler'],
  [Zaehlertyp.BALGENGASZAEHLER, 'Balgengaszähler'],
  [Zaehlertyp.DREHKOLBENZAEHLER, 'Drehkolbengaszähler'],
  [Zaehlertyp.SMARTMETER, 'Smart Meter Zähler'],
  [Zaehlertyp.LEISTUNGSZAEHLER, 'leistungsmessender Zähler'],
  [Zaehlertyp.MAXIMUMZAEHLER, 'Maximumzähler'],
  [Zaehlertyp.TURBINENRADGASZAEHLER, 'Turbinenradgaszähler'],
  [Zaehlertyp.ULTRASCHALLGASZAEHLER, 'Ultraschallgaszähler'],
  [Zaehlertyp.WECHSELSTROMZAEHLER, 'Wechselstromzähler'],
  [Zaehlertyp.BALGENGASZAEHLER_EDL_21, 'Balgengaszähler EDL 21'],
  [Zaehlertyp.BALGENGASZAEHLER_EDL_40, 'Balgengaszähler EDL 40'],
]);
