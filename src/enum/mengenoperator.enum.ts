import {EnumLabels} from './util/enum-labels';

/**
 * Angabe, wie eine Menge in Bezug auf einen Wert zu bilden ist.
 *
 * veröffentlicht am 22. August 2018
 *
 * @see [ENUM Mengenoperator](https://www.bo4e.de/dokumentation/enumerations/enum-mengenoperator)
 */
export enum Mengenoperator {
    KLEINER_ALS = 'KLEINER_ALS',
    GROESSER_ALS = 'GROESSER_ALS',
    GLEICH = 'GLEICH',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Mengenoperator}.
 */
export const MengenoperatorLabel: EnumLabels<Mengenoperator> = EnumLabels.of([
  [Mengenoperator.KLEINER_ALS, 'Alle Objekte mit einem Wert kleiner als der Bezugswert'],
  [Mengenoperator.GROESSER_ALS, 'Alle Objekte mit einem Wert größer als der Bezugswert'],
  [Mengenoperator.GLEICH, 'Alle Objekte mit gleichem Wert'],
]);
