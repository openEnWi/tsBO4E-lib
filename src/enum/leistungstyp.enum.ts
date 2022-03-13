import {EnumLabels} from './util/enum-labels';

/**
 * Leistungstyp
 *
 * Version 1.2
 * veröffentlicht am 23. Februar 2022
 *
 * @see [ENUM Leistungstyp](https://www.bo4e.de/dokumentation/enumerations/enum-leistungstyp/31-05-2021)
 */
export enum Leistungstyp {
    ARBEITSPREIS_WIRKARBEIT = 'ARBEITSPREIS_WIRKARBEIT',
    LEISTUNGSPREIS_WIRKLEISTUNG = 'LEISTUNGSPREIS_WIRKLEISTUNG',
    ARBEITSPREIS_BLINDARBEIT_IND = 'ARBEITSPREIS_BLINDARBEIT_IND',
    ARBEITSPREIS_BLINDARBEIT_KAP = 'ARBEITSPREIS_BLINDARBEIT_KAP',
    GRUNDPREIS = 'GRUNDPREIS',
    GRUNDPREIS_ARBEIT = 'GRUNDPREIS_ARBEIT',
    GRUNDPREIS_LEISTUNG = 'GRUNDPREIS_LEISTUNG',
    MEHRMINDERMENGE = 'MEHRMINDERMENGE',
    MESSSTELLENBETRIEB = 'MESSSTELLENBETRIEB',
    MESSDIENSTLEISTUNG = 'MESSDIENSTLEISTUNG',
    MESSDIENSTLEISTUNG_INKL_MESSUNG = 'MESSDIENSTLEISTUNG_INKL_MESSUNG',
    ABRECHNUNG = 'ABRECHNUNG',
    KONZESSIONS_ABGABE = 'KONZESSIONS_ABGABE',
    KWK_UMLAGE = 'KWK_UMLAGE',
    OFFSHORE_UMLAGE = 'OFFSHORE_UMLAGE',
    ABLAV_UMLAGE = 'ABLAV_UMLAGE',
    SONDERKUNDEN_UMLAGE = 'SONDERKUNDEN_UMLAGE',
    REGELENERGIE_UMLAGE = 'REGELENERGIE_UMLAGE',
    BILANZIERUNG_UMLAGE = 'BILANZIERUNG_UMLAGE',
    AUSLESUNG_ZUSAETZLICH = 'AUSLESUNG_ZUSAETZLICH',
    ABLESUNG_ZUSAETZLICH = 'ABLESUNG_ZUSAETZLICH',
    ABRECHNUNG_ZUSAETZLICH = 'ABRECHNUNG_ZUSAETZLICH',
    SPERRUNG = 'SPERRUNG',
    ENTSPERRUNG = 'ENTSPERRUNG',
    MAHNKOSTEN = 'MAHNKOSTEN',
    INKASSOKOSTEN = 'INKASSOKOSTEN',
    EEG_UMLAGE = 'EEG_UMLAGE',
    ENERGIESTEUER = 'ENERGIESTEUER',
    NETZPREIS = 'NETZPREIS',
    MESSPREIS = 'MESSPREIS',
    SONSTIGER_PREIS = 'SONSTIGER_PREIS',
    DIENSTLEISTUNG = 'DIENSTLEISTUNG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Leistungstyp}.
 */
export const LeistungstypLabel: EnumLabels<Leistungstyp> = EnumLabels.of([
  [Leistungstyp.ARBEITSPREIS_WIRKARBEIT, 'Arbeitspreis zur Abrechnung der Wirkarbeit'],
  [Leistungstyp.LEISTUNGSPREIS_WIRKLEISTUNG, 'Leistungspreis zur Abrechnung der Wirkleistung'],
  [Leistungstyp.ARBEITSPREIS_BLINDARBEIT_IND, 'Arbeitspreis zur Abrechnung der Blindarbeit induktiv'],
  [Leistungstyp.ARBEITSPREIS_BLINDARBEIT_KAP, 'Arbeitspreis zur Abrechnung der Blindarbeit kapazitiv'],
  [Leistungstyp.GRUNDPREIS, 'Grundpreis (pro Zeiteinheit)'],
  [Leistungstyp.GRUNDPREIS_ARBEIT, 'Grundpreis, der auf die Arbeit berechnet wird (bei RLM)'],
  [Leistungstyp.GRUNDPREIS_LEISTUNG, 'Grundpreis, der auf die Leistung berechnet wird (bei RLM)'],
  [Leistungstyp.MEHRMINDERMENGE, 'Mehr- oder Mindermenge'],
  [Leistungstyp.MESSSTELLENBETRIEB, 'Preis pro Zeiteinheit'],
  [Leistungstyp.MESSDIENSTLEISTUNG, 'Preis pro Zeiteinheit'],
  [Leistungstyp.MESSDIENSTLEISTUNG_INKL_MESSUNG, 'MDL inklusive der Messung (ab 2017), Preis pro Zeiteinheit'],
  [Leistungstyp.ABRECHNUNG, 'Preis pro Zeiteinheit'],
  [Leistungstyp.KONZESSIONS_ABGABE, 'Konzessionsabgabe'],
  [Leistungstyp.KWK_UMLAGE, 'KWK-Umlage'],
  [Leistungstyp.OFFSHORE_UMLAGE, 'Offshore-Haftungsumlage'],
  [Leistungstyp.ABLAV_UMLAGE, 'Umlage für abschaltbare Lasten'],
  [Leistungstyp.SONDERKUNDEN_UMLAGE, '§19 StromNEV Umlage'],
  [Leistungstyp.REGELENERGIE_UMLAGE, 'Regelenergieumlage'],
  [Leistungstyp.BILANZIERUNG_UMLAGE, 'Bilanzierungsumlage'],
  [Leistungstyp.AUSLESUNG_ZUSAETZLICH, 'Zusätzliche Auslesung (pro Vorgang)'],
  [Leistungstyp.ABLESUNG_ZUSAETZLICH, 'Zusätzliche Ablesung (pro Vorgang)'],
  [Leistungstyp.ABRECHNUNG_ZUSAETZLICH, 'Zusätzliche Abresung (pro Vorgang)'],
  [Leistungstyp.SPERRUNG, 'Sperrung einer Abnahmestelle'],
  [Leistungstyp.ENTSPERRUNG, 'Entsperrung einer Abnahmestelle'],
  [Leistungstyp.MAHNKOSTEN, 'Mahnkosten'],
  [Leistungstyp.INKASSOKOSTEN, 'Inkassokosten'],
  [Leistungstyp.EEG_UMLAGE, 'EEG-Umlage'],
  [Leistungstyp.ENERGIESTEUER, 'Strom- oder Erdgassteuer'],
  [Leistungstyp.NETZPREIS, 'Netzpreis'],
  [Leistungstyp.MESSPREIS, 'Messpreis'],
  [Leistungstyp.SONSTIGER_PREIS, 'Sonstiger Preis'],
  [Leistungstyp.DIENSTLEISTUNG, 'Dienstleistung'],
]);
