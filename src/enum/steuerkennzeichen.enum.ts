import {EnumLabels} from './util/enum-labels';

/**
 * Zur Kennzeichnung verschiedener Steuersätze und Verfahren.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [ENUM Steuerkennzeichen](https://www.bo4e.de/dokumentation/enumerations/enum-steuerkennzeichen)
 */
export enum Steuerkennzeichen {
    UST_0 = 'UST_0',
    UST_19 = 'UST_19',
    UST_7 = 'UST_7',
    VST_0 = 'VST_0',
    VST_19 = 'VST_19',
    VST_7 = 'VST_7',
    RCV = 'RCV',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Steuerkennzeichen}.
 */
export const SteuerkennzeichenLabel: EnumLabels<Steuerkennzeichen> = EnumLabels.of([
  [Steuerkennzeichen.UST_0, 'Keine Umsatzsteuer, bzw. nicht steuerbar.'],
  [Steuerkennzeichen.UST_19, 'Umsatzsteuer 19%'],
  [Steuerkennzeichen.UST_7, 'Umsatzsteuer 7%'],
  [Steuerkennzeichen.VST_0, 'Keine Vorsteuer, bzw. nicht steuerbar.'],
  [Steuerkennzeichen.VST_19, 'Vorsteuer 19%'],
  [Steuerkennzeichen.VST_7, 'Vorsteuer 7%'],
  [Steuerkennzeichen.RCV, 'Reverse Charge Verfahren (Umkehrung der Steuerpflicht)'],
]);
