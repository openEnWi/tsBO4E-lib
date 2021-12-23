import {EnumLabels} from './util/enum-labels';

/**
 * Übersicht möglicher Titel, z.B. eines Geschäftspartners.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Titel](https://www.bo4e.de/dokumentation/enumerations/enum-titel)
 */
export enum Titel {
    DR = 'DR',
    PROF = 'PROF',
    PROF_DR = 'PROF_DR',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Titel}.
 */
export const TitelLabel: EnumLabels<Titel> = EnumLabels.of([
  [Titel.DR, 'Doktor'],
  [Titel.PROF, 'Professor'],
  [Titel.PROF_DR, 'Professor Dr.'],
]);
