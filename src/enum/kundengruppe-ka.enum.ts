import {EnumLabels} from './util/enum-labels';
import {ImmutableMap} from './util/immutable-map';
import {Sparte} from './sparte.enum';

/**
 * Eine Aufzählung zur Einordnung für die Höhe der Konzessionsabgabe.
 *
 * veröffentlicht am 08. Mai 2018
 *
 * @see [ENUM KundengruppeKA](https://www.bo4e.de/dokumentation/enumerations/enum-kundengruppeka)
 */
export enum KundengruppeKa {
  S_SCHWACHLAST = 'S_SCHWACHLAST',
  S_TARIF_25000 = 'S_TARIF_25000',
  S_TARIF_100000 = 'S_TARIF_100000',
  S_TARIF_500000 = 'S_TARIF_500000',
  S_TARIF_G_500000 = 'S_TARIF_G_500000',
  S_SONDERKUNDE = 'S_SONDERKUNDE',
  G_KOWA_25000 = 'G_KOWA_25000',
  G_KOWA_100000 = 'G_KOWA_100000',
  G_KOWA_500000 = 'G_KOWA_500000',
  G_KOWA_G_500000 = 'G_KOWA_G_500000',
  G_TARIF_25000 = 'G_TARIF_25000',
  G_TARIF_100000 = 'G_TARIF_100000',
  G_TARIF_500000 = 'G_TARIF_500000',
  G_TARIF_G_500000 = 'G_TARIF_G_500000',
  G_SONDERKUNDE = 'G_SONDERKUNDE',
  SONDER_KAS = 'SONDER_KAS',
  SONDER_SAS = 'SONDER_SAS',
  SONDER_TAS = 'SONDER_TAS',
  SONDER_TKS = 'SONDER_TKS',
  SONDER_TSS = 'SONDER_TSS',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link KundengruppeKa}.
 */
export const KundengruppeKaLabel: EnumLabels<KundengruppeKa> = EnumLabels.of([
  [KundengruppeKa.S_SCHWACHLAST, 'Schwachlast-Kunde'],
  [KundengruppeKa.S_TARIF_25000, 'Strom Tarifkunde Gemeindegröße bis 25000 Einwohner'],
  [KundengruppeKa.S_TARIF_100000, 'Strom Tarifkunde Gemeindegröße bis 100000 Einwohner'],
  [KundengruppeKa.S_TARIF_500000, 'Strom Tarifkunde Gemeindegröße bis 500000 Einwohner'],
  [KundengruppeKa.S_TARIF_G_500000, 'Strom Tarifkunde Gemeindegröße größer 500000 Einwohner'],
  [KundengruppeKa.S_SONDERKUNDE, 'Strom Sonderkunde'],
  [KundengruppeKa.G_KOWA_25000, 'Gas Kochen und Wasser Tarifkunde Gemeindegröße bis 25000 Einwohner'],
  [KundengruppeKa.G_KOWA_100000, 'Gas Kochen und Wasser Tarifkunde Gemeindegröße bis 100000 Einwohner'],
  [KundengruppeKa.G_KOWA_500000, 'Gas Kochen und Wasser Tarifkunde Gemeindegröße bis 500000 Einwohner'],
  [KundengruppeKa.G_KOWA_G_500000, 'Gas Kochen und Wasser Tarifkunde Gemeindegröße größer 500000 Einwohner'],
  [KundengruppeKa.G_TARIF_25000, 'GasTarifkunde Gemeindegröße bis 25000 Einwohner'],
  [KundengruppeKa.G_TARIF_100000, 'GasTarifkunde Gemeindegröße bis 100000 Einwohner'],
  [KundengruppeKa.G_TARIF_500000, 'GasTarifkunde Gemeindegröße bis 500000 Einwohner'],
  [KundengruppeKa.G_TARIF_G_500000, 'GasTarifkunde Gemeindegröße größer 500000 Einwohner'],
  [KundengruppeKa.G_SONDERKUNDE, 'Gas Sonderkunde'],
  [KundengruppeKa.SONDER_KAS, 'Sonderegelung, keine Systematik der KAV'],
  [KundengruppeKa.SONDER_SAS, 'Sondervertragskunde abweichender Preis'],
  [KundengruppeKa.SONDER_TAS, 'Tarifkunden abweichender Preis'],
  [KundengruppeKa.SONDER_TKS, 'Kochen Warmwassererzeugung abweichender Preis'],
  [KundengruppeKa.SONDER_TSS, 'Strom mit Schwachlast (NT) abweichender Preis'],
]);

/**
 * Liefert zurück, welche {@link KundengruppeKa} in welcher {@link Sparte} verfügbar ist.
 */
export const KundengruppeKaSparte: ImmutableMap<KundengruppeKa, Array<Sparte>> = ImmutableMap.of([
  [KundengruppeKa.S_SCHWACHLAST, [Sparte.STROM]],
  [KundengruppeKa.S_TARIF_25000, [Sparte.STROM]],
  [KundengruppeKa.S_TARIF_100000, [Sparte.STROM]],
  [KundengruppeKa.S_TARIF_500000, [Sparte.STROM]],
  [KundengruppeKa.S_TARIF_G_500000, [Sparte.STROM]],
  [KundengruppeKa.S_SONDERKUNDE, [Sparte.STROM]],
  [KundengruppeKa.G_KOWA_25000, [Sparte.GAS]],
  [KundengruppeKa.G_KOWA_100000, [Sparte.GAS]],
  [KundengruppeKa.G_KOWA_500000, [Sparte.GAS]],
  [KundengruppeKa.G_KOWA_G_500000, [Sparte.GAS]],
  [KundengruppeKa.G_TARIF_25000, [Sparte.GAS]],
  [KundengruppeKa.G_TARIF_100000, [Sparte.GAS]],
  [KundengruppeKa.G_TARIF_500000, [Sparte.GAS]],
  [KundengruppeKa.G_TARIF_G_500000, [Sparte.GAS]],
  [KundengruppeKa.G_SONDERKUNDE, [Sparte.GAS]],
  [KundengruppeKa.SONDER_KAS, [Sparte.STROM, Sparte.GAS]],
  [KundengruppeKa.SONDER_SAS, [Sparte.STROM, Sparte.GAS]],
  [KundengruppeKa.SONDER_TAS, [Sparte.STROM, Sparte.GAS]],
  [KundengruppeKa.SONDER_TKS, [Sparte.GAS]],
  [KundengruppeKa.SONDER_TSS, [Sparte.STROM]],
]);
