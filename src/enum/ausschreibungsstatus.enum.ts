import {EnumLabels} from './util/enum-labels';

/**
 * Bezeichnungen für die Ausschreibungsphasen.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Ausschreibungsstatus](https://www.bo4e.de/dokumentation/enumerations/enum-ausschreibungsstatus)
 */
export enum Ausschreibungsstatus {
    PHASE1 = 'PHASE1',
    PHASE2 = 'PHASE2',
    PHASE3 = 'PHASE3',
    PHASE4 = 'PHASE4',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Ausschreibungsstatus}.
 */
export const AusschreibungsstatusLabel: EnumLabels<Ausschreibungsstatus> = EnumLabels.of([
  [Ausschreibungsstatus.PHASE1, 'Phase1: Teilnahmewettbewerb'],
  [Ausschreibungsstatus.PHASE2, 'Phase2: Angebotsphase'],
  [Ausschreibungsstatus.PHASE3, 'Phase3: Verhandlungsphase'],
  [Ausschreibungsstatus.PHASE4, 'Phase4: Zuschlagserteilung'],
]);
