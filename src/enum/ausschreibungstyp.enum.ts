import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung für die Typisierung von Ausschreibungen.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Ausschreibungstyp](https://www.bo4e.de/dokumentation/enumerations/enum-ausschreibungstyp)
 */
export enum Ausschreibungstyp {
    PRIVATRECHTLICH = 'PRIVATRECHTLICH',
    OEFFENTLICHRECHTLICH = 'OEFFENTLICHRECHTLICH',
    EUROPAWEIT = 'EUROPAWEIT',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Ausschreibungstyp}.
 */
export const AusschreibungsstypLabel: EnumLabels<Ausschreibungstyp> = EnumLabels.create([
  [Ausschreibungstyp.PRIVATRECHTLICH, 'privat-rechtlich'],
  [Ausschreibungstyp.OEFFENTLICHRECHTLICH, 'öffentlich-rechtlich'],
  [Ausschreibungstyp.EUROPAWEIT, 'europaweit'],
]);
