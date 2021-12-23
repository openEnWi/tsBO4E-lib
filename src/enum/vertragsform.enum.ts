import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der Möglichkeiten zu Vertragsformen in Ausschreibungen.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Vertragsform](https://www.bo4e.de/dokumentation/enumerations/enum-vertragsform)
 */
export enum Vertragsform {
    ONLINE = 'ONLINE',
    DIREKT = 'DIREKT',
    FAX = 'FAX',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Vertragsart}.
 */
export const VertragsformLabel: EnumLabels<Vertragsform> = EnumLabels.of([
  [Vertragsform.ONLINE, 'Online'],
  [Vertragsform.DIREKT, 'Direkt'],
  [Vertragsform.FAX, 'Auftragsfax'],
]);
