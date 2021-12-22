import {EnumLabels} from './util/enum-labels';
import {ImmutableMap} from './util/immutable-map';
import {Sparte} from './sparte.enum';

/**
 * Festlegung, welcher Typ von Messung mit einem Preis belegt wird.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Messpreistyp](https://www.bo4e.de/dokumentation/enumerations/enum-messpreistyp)
 */
export enum Messpreistyp {
    MESSPREIS_G2_5 = 'MESSPREIS_G2_5',
    MESSPREIS_G4 = 'MESSPREIS_G4',
    MESSPREIS_G6 = 'MESSPREIS_G6',
    MESSPREIS_G10 = 'MESSPREIS_G10',
    MESSPREIS_G16 = 'MESSPREIS_G16',
    MESSPREIS_G25 = 'MESSPREIS_G25',
    MESSPREIS_G40 = 'MESSPREIS_G40',
    ELEKTRONISCHER_AUFSATZ = 'ELEKTRONISCHER_AUFSATZ',
    SMART_METER_MESSPREIS_G2_5 = 'SMART_METER_MESSPREIS_G2_5',
    SMART_METER_MESSPREIS_G4 = 'SMART_METER_MESSPREIS_G4',
    SMART_METER_MESSPREIS_G6 = 'SMART_METER_MESSPREIS_G6',
    SMART_METER_MESSPREIS_G10 = 'SMART_METER_MESSPREIS_G10',
    SMART_METER_MESSPREIS_G16 = 'SMART_METER_MESSPREIS_G16',
    SMART_METER_MESSPREIS_G25 = 'SMART_METER_MESSPREIS_G25',
    SMART_METER_MESSPREIS_G40 = 'SMART_METER_MESSPREIS_G40',
    VERRECHNUNGSPREIS_ET_WECHSEL = 'VERRECHNUNGSPREIS_ET_WECHSEL',
    VERRECHNUNGSPREIS_ET_DREH = 'VERRECHNUNGSPREIS_ET_DREH',
    VERRECHNUNGSPREIS_ZT_WECHSEL = 'VERRECHNUNGSPREIS_ZT_WECHSEL',
    VERRECHNUNGSPREIS_ZT_DREH = 'VERRECHNUNGSPREIS_ZT_DREH',
    VERRECHNUNGSPREIS_L_ET = 'VERRECHNUNGSPREIS_L_ET',
    VERRECHNUNGSPREIS_L_ZT = 'VERRECHNUNGSPREIS_L_ZT',
    VERRECHNUNGSPREIS_SM = 'VERRECHNUNGSPREIS_SM',
    AUFSCHLAG_WANDLER = 'AUFSCHLAG_WANDLER',
    AUFSCHLAG_TARIFSCHALTUNG = 'AUFSCHLAG_TARIFSCHALTUNG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Messpreistyp}.
 */
export const MesspreistypLabel: EnumLabels<Messpreistyp> = EnumLabels.of([
  [Messpreistyp.MESSPREIS_G2_5, 'Messpreis_G2,5'],
  [Messpreistyp.MESSPREIS_G4, 'Messpreis_G4'],
  [Messpreistyp.MESSPREIS_G6, 'Messpreis_G6'],
  [Messpreistyp.MESSPREIS_G10, 'Messpreis_G10'],
  [Messpreistyp.MESSPREIS_G16, 'Messpreis_G16'],
  [Messpreistyp.MESSPREIS_G25, 'Messpreis_G25'],
  [Messpreistyp.MESSPREIS_G40, 'Messpreis_G40'],
  [Messpreistyp.ELEKTRONISCHER_AUFSATZ, 'elektronischer_Aufsatz'],
  [Messpreistyp.SMART_METER_MESSPREIS_G2_5, 'Smart_Meter_Messpreis_G2,5'],
  [Messpreistyp.SMART_METER_MESSPREIS_G4, 'Smart_Meter_Messpreis_G4'],
  [Messpreistyp.SMART_METER_MESSPREIS_G6, 'Smart_Meter_Messpreis_G6'],
  [Messpreistyp.SMART_METER_MESSPREIS_G10, 'Smart_Meter_Messpreis_G10'],
  [Messpreistyp.SMART_METER_MESSPREIS_G16, 'Smart_Meter_Messpreis_G16'],
  [Messpreistyp.SMART_METER_MESSPREIS_G25, 'Smart_Meter_Messpreis_G25'],
  [Messpreistyp.SMART_METER_MESSPREIS_G40, 'Smart_Meter_Messpreis_G40'],
  [Messpreistyp.VERRECHNUNGSPREIS_ET_WECHSEL, 'Verrechnungspreis_ET_Wechsel'],
  [Messpreistyp.VERRECHNUNGSPREIS_ET_DREH, 'Verrechnungspreis_ET_Dreh'],
  [Messpreistyp.VERRECHNUNGSPREIS_ZT_WECHSEL, 'Verrechnungspreis_ZT_Wechsel'],
  [Messpreistyp.VERRECHNUNGSPREIS_ZT_DREH, 'Verrechnungspreis_ZT_Dreh'],
  [Messpreistyp.VERRECHNUNGSPREIS_L_ET, 'Verrechnungspreis_L_ET'],
  [Messpreistyp.VERRECHNUNGSPREIS_L_ZT, 'Verrechnungspreis_L_ZT'],
  [Messpreistyp.VERRECHNUNGSPREIS_SM, 'Verrechnungspreis_SM'],
  [Messpreistyp.AUFSCHLAG_WANDLER, 'AufschlagWandler'],
  [Messpreistyp.AUFSCHLAG_TARIFSCHALTUNG, 'AufschlagTarifschaltung'],
]);

/**
 * Liefert zurück, welcher {@link Messpreistyp} in welcher {@link Sparte} verfügbar ist.
 */
export const MesspreistypSparte: ImmutableMap<Messpreistyp, Sparte> = ImmutableMap.of([
  [Messpreistyp.MESSPREIS_G2_5, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G4, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G6, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G10, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G16, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G25, Sparte.GAS],
  [Messpreistyp.MESSPREIS_G40, Sparte.GAS],
  [Messpreistyp.ELEKTRONISCHER_AUFSATZ, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G2_5, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G4, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G6, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G10, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G16, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G25, Sparte.GAS],
  [Messpreistyp.SMART_METER_MESSPREIS_G40, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_ET_WECHSEL, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_ET_DREH, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_ZT_WECHSEL, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_ZT_DREH, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_L_ET, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_L_ZT, Sparte.STROM],
  [Messpreistyp.VERRECHNUNGSPREIS_SM, Sparte.STROM],
  [Messpreistyp.AUFSCHLAG_WANDLER, Sparte.STROM],
  [Messpreistyp.AUFSCHLAG_TARIFSCHALTUNG, Sparte.STROM],
]);
