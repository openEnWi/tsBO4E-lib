import {EnumLabels} from './util/enum-labels';
import {ImmutableMap} from './util/immutable-map';

export const AUT_COUNTRY_CODE = 40;
export const DEU_COUNTRY_CODE = 276;
export const CHE_COUNTRY_CODE = 756;

export type Alpha3Code = 'AUT' | 'DEU' | 'CHE';
export type CountryCode = 40 | 276 | 756;

export interface LandescodeData {
    landescode: Landescode,
    alpha3Code: Alpha3Code;
    countryCode: CountryCode;
}

/**
 * Der ISO-Landescode.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Landescode](https://www.bo4e.de/dokumentation/enumerations/enum-landescode)
 */
export enum Landescode {
    AT = 'AT',
    DE = 'DE',
    CH = 'CH',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Landescode}.
 */
export const LandescodeLabel: EnumLabels<Landescode> = EnumLabels.of([
  [Landescode.AT, 'Austria'],
  [Landescode.DE, 'Germany'],
  [Landescode.CH, 'Switzerland'],
]);

/**
 * Liefert für jeden Landescode weitere Informationen als {@link LandescodeData}.
 */
export const LandescodeInformationen: ImmutableMap<Landescode, LandescodeData> = ImmutableMap.of([
  [Landescode.AT, {landescode: Landescode.AT, alpha3Code: 'AUT', countryCode: AUT_COUNTRY_CODE}],
  [Landescode.DE, {landescode: Landescode.DE, alpha3Code: 'DEU', countryCode: DEU_COUNTRY_CODE}],
  [Landescode.CH, {landescode: Landescode.CH, alpha3Code: 'CHE', countryCode: CHE_COUNTRY_CODE}],
]);


