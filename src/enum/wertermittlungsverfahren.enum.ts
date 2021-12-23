import {EnumLabels} from './util/enum-labels';

/**
 * Gibt an, ob es sich um eine Prognose oder eine Messung handelt, beispielsweise bei der Abbildung eines Verbrauchs.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Wertermittlungsverfahren](https://www.bo4e.de/dokumentation/enumerations/enum-mengenverwendung)
 */
export enum Wertermittlungsverfahren {
    PROGNOSE = 'PROGNOSE',
    MESSUNG = 'MESSUNG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Wertermittlungsverfahren}.
 */
export const WertermittlungsverfahrenLabel: EnumLabels<Wertermittlungsverfahren> = EnumLabels.of([
  [Wertermittlungsverfahren.PROGNOSE, 'Prognose'],
  [Wertermittlungsverfahren.MESSUNG, 'Messung'],
]);
