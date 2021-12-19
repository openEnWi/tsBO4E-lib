import {EnumLabels} from './util/enum-labels';

/**
 * Mit dieser Aufzählung kann zwischen den Bilanzierungsmethoden bzw. -Grundlagen unterschieden werden.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Bilanzierungsmethode](https://www.bo4e.de/dokumentation/enumerations/enum-bilanzierungsmethode)
 */
export enum Bilanzierungsmethode {
    RLM = 'RLM',
    SLP = 'SLP',
    TLP_GEMEINSAM = 'TLP_GEMEINSAM',
    TLP_GETRENNT = 'TLP_GETRENNT',
    PAUSCHAL = 'PAUSCHAL',
}

/**
 * Liefert kurze textuelle Repräsentationen einer {@link Bilanzierungsmethode}.
 */
export const BilanzierungsmethodeLabel: EnumLabels<Bilanzierungsmethode> = EnumLabels.create([
  [Bilanzierungsmethode.RLM, 'Registrierende Leistungsmessung'],
  [Bilanzierungsmethode.SLP, 'Standard Lastprofil'],
  [Bilanzierungsmethode.TLP_GEMEINSAM, 'TLP gemeinsame Messung'],
  [Bilanzierungsmethode.TLP_GETRENNT, 'TLP getrennte Messung'],
  [Bilanzierungsmethode.PAUSCHAL, 'Pauschale Betrachtung (Band)'],
]);
