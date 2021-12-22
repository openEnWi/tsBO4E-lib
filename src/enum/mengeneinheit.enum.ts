import {EnumLabels} from './util/enum-labels';

/**
 * Einheit: Messgrößen, die per Messung oder Vorgabe ermittelt werden können.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Mengeneinheit](https://www.bo4e.de/dokumentation/enumerations/enum-mengeneinheit)
 */
export enum Mengeneinheit {
    W = 'W',
    WH = 'WH',
    KW = 'KW',
    KWH = 'KWH',
    KVARH = 'KVARH',
    MW = 'MW',
    MWH = 'MWH',
    STUECK = 'STUECK',
    KUBIKMETER = 'KUBIKMETER',
    STUNDE = 'STUNDE',
    TAG = 'TAG',
    MONAT = 'MONAT',
    JAHR = 'JAHR',
    PROZENT = 'PROZENT',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Mengeneinheit}.
 */
export const MengeneinheitLabel: EnumLabels<Mengeneinheit> = EnumLabels.of([
  [Mengeneinheit.W, 'Watt'],
  [Mengeneinheit.WH, 'Wattstunde'],
  [Mengeneinheit.KW, 'Kilowatt'],
  [Mengeneinheit.KWH, 'Kilowattstunde'],
  [Mengeneinheit.KVARH, 'Kilovarstunde'],
  [Mengeneinheit.MW, 'Megawatt'],
  [Mengeneinheit.MWH, 'Megawattstunde'],
  [Mengeneinheit.STUECK, 'Stückzahl'],
  [Mengeneinheit.KUBIKMETER, 'Kubikmeter (Gas)'],
  [Mengeneinheit.STUNDE, 'Stunde'],
  [Mengeneinheit.TAG, 'Tage'],
  [Mengeneinheit.MONAT, 'Monat'],
  [Mengeneinheit.JAHR, 'Jahr'],
  [Mengeneinheit.PROZENT, 'Prozent'],
]);
