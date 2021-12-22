import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung verschiedener in der INVOIC angegebenen Rechnungstypen.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [ENUM NNRechnungstyp](https://www.bo4e.de/dokumentation/enumerations/enum-nnrechnungstyp)
 */
export enum NnRechnungstyp {
    ABSCHLUSSRECHNUNG = 'ABSCHLUSSRECHNUNG',
    ABSCHLAGSRECHNUNG = 'ABSCHLAGSRECHNUNG',
    TURNUSRECHNUNG = 'TURNUSRECHNUNG',
    MONATSRECHNUNG = 'MONATSRECHNUNG',
    WIMRECHNUNG = 'WIMRECHNUNG',
    ZWISCHENRECHNUNG = 'ZWISCHENRECHNUNG',
    INTEGRIERTE_13TE_RECHNUNG = 'INTEGRIERTE_13TE_RECHNUNG',
    ZUSAETZLICHE_13TE_RECHNUNG = 'ZUSAETZLICHE_13TE_RECHNUNG',
    MEHRMINDERMENGENRECHNUNG = 'MEHRMINDERMENGENRECHNUNG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link NnRechnungstyp}.
 */
export const NnRechnungstypLabel: EnumLabels<NnRechnungstyp> = EnumLabels.of([
  [NnRechnungstyp.ABSCHLUSSRECHNUNG, 'Abschlussrechnung'],
  [NnRechnungstyp.ABSCHLAGSRECHNUNG, 'Abschlagsrechnung'],
  [NnRechnungstyp.TURNUSRECHNUNG, 'Turnusrechnung'],
  [NnRechnungstyp.MONATSRECHNUNG, 'Monatsrechnung'],
  [NnRechnungstyp.WIMRECHNUNG, 'Rechnung für WiM'],
  [NnRechnungstyp.ZWISCHENRECHNUNG, 'Zwischenrechnung'],
  [NnRechnungstyp.INTEGRIERTE_13TE_RECHNUNG, 'Integrierte 13. Rechnung'],
  [NnRechnungstyp.ZUSAETZLICHE_13TE_RECHNUNG, '13. Rechnung'],
  [NnRechnungstyp.MEHRMINDERMENGENRECHNUNG, 'Mehr/Mindermengenabrechnung'],
]);
