import {EnumLabels} from './util/enum-labels';

/**
 * Übersicht möglicher Titel, z.B. eines Geschäftspartners.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Titel](https://www.bo4e.de/dokumentation/enumerations/enum-titel)
 */
export enum Verbrauchsart {
    KL = 'KL',
    KLW = 'KLW',
    KLWS = 'KLWS',
    W = 'W',
    WS = 'WS',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Verbrauchsart}.
 */
export const VerbrauchsartLabel: EnumLabels<Verbrauchsart> = EnumLabels.of([
  [Verbrauchsart.KL, 'Kraft/Licht'],
  [Verbrauchsart.KLW, 'Kraft/Licht/Wärme'],
  [Verbrauchsart.KLWS, 'Kraft/Licht/Wärme/Speicherheizung'],
  [Verbrauchsart.W, 'Wärme'],
  [Verbrauchsart.WS, 'Wärme/Speicherheizung'],
]);
