import {EnumLabels} from './util/enum-labels';

/**
 * Statusinformation für Preise
 *
 * veröffentlicht am 14. November 2018
 *
 * @see [ENUM Preisstatus](https://www.bo4e.de/dokumentation/enumerations/enum-preisstatus)
 */
export enum Preisstatus {
    VORLAEUFIG = 'VORLAEUFIG',
    ENDGUELTIG = 'ENDGUELTIG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Preisstatus}.
 */
export const PreisstatusLabel: EnumLabels<Preisstatus> = EnumLabels.of([
  [Preisstatus.VORLAEUFIG, 'vorläufig'],
  [Preisstatus.ENDGUELTIG, 'endgültig'],
]);
