import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der Vertragsarten
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [ENUM Vertragsart](https://www.bo4e.de/dokumentation/enumerations/enum-vertragsart)
 */
export enum Vertragsart {
    ENERGIELIEFERVERTRAG = 'ENERGIELIEFERVERTRAG',
    NETZNUTZUNGSVERTRAG = 'NETZNUTZUNGSVERTRAG',
    BILANZIERUNGSVERTRAG = 'BILANZIERUNGSVERTRAG',
    MESSSTELLENBETRIEBSVERTRAG = 'MESSSTELLENBETRIEBSVERTRAG',
    BUENDELVERTRAG = 'BUENDELVERTRAG',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Vertragsart}.
 */
export const VertragsartLabel: EnumLabels<Vertragsart> = EnumLabels.of([
  [Vertragsart.ENERGIELIEFERVERTRAG, 'Energieliefervertrag'],
  [Vertragsart.NETZNUTZUNGSVERTRAG, 'Netznutzungsvertrag'],
  [Vertragsart.BILANZIERUNGSVERTRAG, 'Bilanzierungsvertrag'],
  [Vertragsart.MESSSTELLENBETRIEBSVERTRAG, 'Messstellenbetriebsvertrag'],
  [Vertragsart.BUENDELVERTRAG, 'Bündelvertrag'],
]);
