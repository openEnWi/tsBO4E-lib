import {EnumLabels} from './util/enum-labels';

/**
 * Bezeichnung der Preismodelle in Ausschreibungen für die Energielieferung.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Preismodell](https://www.bo4e.de/dokumentation/enumerations/enum-preismodell)
 */
export enum Preismodell {
    FESTPREIS = 'FESTPREIS',
    TRANCHE = 'TRANCHE',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Preismodell}.
 */
export const PreismodellLabel: EnumLabels<Preismodell> = EnumLabels.of([
  [Preismodell.FESTPREIS, 'Festpreis'],
  [Preismodell.TRANCHE, 'Tranche'],
]);
