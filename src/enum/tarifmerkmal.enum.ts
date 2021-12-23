import {EnumLabels} from './util/enum-labels';

/**
 * Produktmerkmale im Zusammenhang mit der Tarifdefinition.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Tarifmerkmal](https://www.bo4e.de/dokumentation/enumerations/enum-tarifmodell)
 */
export enum Tarifmerkmal {
    STANDARD = 'STANDARD',
    VORKASSE = 'VORKASSE',
    PAKET = 'PAKET',
    KOMBI = 'KOMBI',
    FESTPREIS = 'FESTPREIS',
    BAUSTROM = 'BAUSTROM',
    HAUSLICHT = 'HAUSLICHT',
    HEIZSTROM = 'HEIZSTROM',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Tarifmerkmal}.
 */
export const TarifmerkmalLabel: EnumLabels<Tarifmerkmal> = EnumLabels.of([
  [Tarifmerkmal.STANDARD, 'Standardprodukt'],
  [Tarifmerkmal.VORKASSE, 'Vorkassenprodukt'],
  [Tarifmerkmal.PAKET, 'Paketpreisprodukt'],
  [Tarifmerkmal.KOMBI, 'Kombiprodukt'],
  [Tarifmerkmal.FESTPREIS, 'Festpreisprodukt'],
  [Tarifmerkmal.BAUSTROM, 'Baustromprodukt'],
  [Tarifmerkmal.HAUSLICHT, 'Hauslichtprodukt'],
  [Tarifmerkmal.HEIZSTROM, 'Heizstromprodukt'],
]);
