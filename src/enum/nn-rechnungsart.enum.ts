import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung verschiedener in der INVOIC angegebenen Rechnungsarten.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [ENUM NNRechnungsart](https://www.bo4e.de/dokumentation/enumerations/enum-nnrechnungsart)
 */
export enum NnRechnungsart {
    HANDELSRECHNUNG = 'HANDELSRECHNUNG',
    SELBSTAUSGESTELLT = 'SELBSTAUSGESTELLT',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link NnRechnungsart}.
 */
export const NnRechnungsartLabel: EnumLabels<NnRechnungsart> = EnumLabels.of([
  [NnRechnungsart.HANDELSRECHNUNG, 'Handelsrechnung'],
  [NnRechnungsart.SELBSTAUSGESTELLT, 'Selbst ausgestellte Rechnung, z.B. für Einspeiserechnungen.'],
]);
