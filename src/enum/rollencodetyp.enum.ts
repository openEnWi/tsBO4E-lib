import {EnumLabels} from './util/enum-labels';

/**
 * Gibt den Codetyp einer Rolle, beispielsweise einer Marktrolle, an.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Rollencodetyp](https://www.bo4e.de/dokumentation/enumerations/enum-rollencodetyp)
 */
export enum Rollencodetyp {
    BDEW = 'BDEW',
    DVGW = 'DVGW',
    GLN = 'GLN',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Rollencodetyp}.
 */
export const RollencodetypLabel: EnumLabels<Rollencodetyp> = EnumLabels.of([
  [Rollencodetyp.BDEW, 'Bundesverband der Energie- u. Wasserwirtschaft'],
  [Rollencodetyp.DVGW, 'Deutscher Verein des Gas- und Wasserfaches'],
  [Rollencodetyp.GLN, 'Global Location Number'],
]);
