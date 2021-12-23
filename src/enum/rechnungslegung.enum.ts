import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der Möglichkeiten zur Rechnungslegung in Ausschreibungen.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Rechnungslegung](https://www.bo4e.de/dokumentation/enumerations/enum-rechnungslegung)
 */
export enum Rechnungslegung {
    MONATSRECHN = 'MONATSRECHN',
    ABSCHL_MONATSRECHN = 'ABSCHL_MONATSRECHN',
    ABSCHL_JAHRESRECHN = 'ABSCHL_JAHRESRECHN',
    MONATSRECHN_JAHRESRECHN = 'MONATSRECHN_JAHRESRECHN',
    VORKASSE = 'VORKASSE',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Rechnungslegung}.
 */
export const RechnungslegungLabel: EnumLabels<Rechnungslegung> = EnumLabels.of([
  [Rechnungslegung.MONATSRECHN, 'monatsscharfe Rechnung'],
  [Rechnungslegung.ABSCHL_MONATSRECHN, 'Abschlag mit Monatsrechnung'],
  [Rechnungslegung.ABSCHL_JAHRESRECHN, 'Abschlag mit Jahresrechnung'],
  [Rechnungslegung.MONATSRECHN_JAHRESRECHN, 'Monatsrechnung mit Jahresrechnung'],
  [Rechnungslegung.VORKASSE, 'Vorkasse'],
]);
