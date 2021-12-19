import {EnumLabels} from './util/enum-labels';

/**
 * Übersicht möglicher Anreden, z.B. eines Geschäftspartners.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Anrede](https://www.bo4e.de/dokumentation/enumerations/enum-anrede)
 */
export enum Anrede {
    HERR= 'HERR',
    FRAU = 'FRAU',
    EHELEUTE = 'EHELEUTE',
    FIRMA = 'FIRMA',
    INDIVIDUELL = 'INDIVIDUELL',
}

/**
 * Liefert kurze textuelle Repräsentationen einer {@link Anrede}.
 */
export const AnredeLabel: EnumLabels<Anrede> = EnumLabels.create([
  [Anrede.HERR, 'Herr'],
  [Anrede.FRAU, 'Frau'],
  [Anrede.EHELEUTE, 'Eheleute'],
  [Anrede.FIRMA, 'Firma'],
  [Anrede.INDIVIDUELL, 'Individuell festgelegt'],
]);
