import {EnumLabels} from './util/enum-labels';

/**
 * In diesem Enum werden die Währungen und ihre Untereinheiten definiert, beispielsweise für die Verwendung in Preisen.
 *
 * Z.B. 23 ct / kWh oder 50 EUR / Jahr
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Waehrungseinheit](https://www.bo4e.de/dokumentation/enumerations/enum-waehrungseinheit)
 */
export enum Waehrungseinheit {
    EUR = 'EUR',
    CT = 'CT',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Waehrungseinheit}.
 */
export const WaehrungseinheitLabel: EnumLabels<Waehrungseinheit> = EnumLabels.of([
  [Waehrungseinheit.EUR, 'Euro'],
  [Waehrungseinheit.CT, 'Eurocent'],
]);
