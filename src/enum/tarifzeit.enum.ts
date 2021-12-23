import {EnumLabels} from './util/enum-labels';

/**
 * Zur Kennzeichnung verschiedener Tarifzeiten, beispielsweise zur Bepreisung oder zur Verbrauchsermittlung.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [ENUM Tarifzeit](https://www.bo4e.de/dokumentation/enumerations/enum-tarifzeit)
 */
export enum Tarifzeit {
    TZ_STANDARD = 'TZ_STANDARD',
    TZ_HT = 'TZ_HT',
    TZ_NT = 'TZ_NT',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Tarifzeit}.
 */
export const TarifzeitLabel: EnumLabels<Tarifzeit> = EnumLabels.of([
  [Tarifzeit.TZ_STANDARD, 'Tarifzeit Standard für Eintarif-Konfigurationen'],
  [Tarifzeit.TZ_HT, 'Tarifzeit für Hochtarif bei Mehrtarif-Konfigurationen'],
  [Tarifzeit.TZ_NT, 'Tarifzeit für Niedrigtarif bei Mehrtarif-Konfigurationen'],
]);
