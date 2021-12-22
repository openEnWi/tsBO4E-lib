import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung von zusätzlichen Informationen zum Status, beispielsweise in Lastgängen oder Zählwerkständen.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [ENUM Messwertstatuszusatz](https://www.bo4e.de/dokumentation/enumerations/enum-messwertstatuszusatz)
 */
export enum Messwertstatuszusatz {
    Z84_LEERSTAND = 'Z84_LEERSTAND',
    Z85_REALERZAEHLERUEBERLAUFGEPRUEFT = 'Z85_REALERZAEHLERUEBERLAUFGEPRUEFT',
    Z86_PLAUSIBELWGKONTROLLABLESUNG = 'Z86_PLAUSIBELWGKONTROLLABLESUNG',
    Z87_PLAUSIBELWGKUNDENHINWEIS = 'Z87_PLAUSIBELWGKUNDENHINWEIS',
    ZC3_AUSTAUSCHDESERSATZWERTES = 'ZC3_AUSTAUSCHDESERSATZWERTES',
    Z88_VERGLEICHSMESSUNG_GEEICHT = 'Z88_VERGLEICHSMESSUNG_GEEICHT',
    Z89_VERGLEICHSMESSUNG_NICHTGEEICHT = 'Z89_VERGLEICHSMESSUNG_NICHTGEEICHT',
    Z90_MESSWERTNACHBILDUNGAUSGEEICHTENWERTEN = 'Z90_MESSWERTNACHBILDUNGAUSGEEICHTENWERTEN',
    Z91_MESSWERTNACHBILDUNGAUSNICHTGEEICHTENWERTEN = 'Z91_MESSWERTNACHBILDUNGAUSNICHTGEEICHTENWERTEN',
    Z92_INTERPOLATION = 'Z92_INTERPOLATION',
    Z93_HALTEWERT = 'Z93_HALTEWERT',
    Z94_BILANZIERUNGNETZABSCHNITT = 'Z94_BILANZIERUNGNETZABSCHNITT',
    Z95_HISTORISCHEMESSWERTE = 'Z95_HISTORISCHEMESSWERTE',
    ZJ2_STATISTISCHEMETHODE = 'ZJ2_STATISTISCHEMETHODE',
    Z74_KEINZUGANG = 'Z74_KEINZUGANG',
    Z75_KOMMUNIKATIONSSTOERUNG = 'Z75_KOMMUNIKATIONSSTOERUNG',
    Z76_NETZAUSFALL = 'Z76_NETZAUSFALL',
    Z77_SPANNUNGSAUSFALL = 'Z77_SPANNUNGSAUSFALL',
    Z78_GERAETEWECHSEL = 'Z78_GERAETEWECHSEL',
    Z79_KALIBRIERUNG = 'Z79_KALIBRIERUNG',
    Z80_GERAETARBEITETAUSSERHALBDERBETRIEBSBEDINGUNGEN = 'Z80_GERAETARBEITETAUSSERHALBDERBETRIEBSBEDINGUNGEN',
    Z81_MESSEINRICHTUNGGESTOERT_DEFEKT = 'Z81_MESSEINRICHTUNGGESTOERT_DEFEKT',
    Z82_UNSICHERHEITMESSUNG = 'Z82_UNSICHERHEITMESSUNG',
    Z98_BERUECKSICHTIGUNGSTOERMENGENZAEHLWERK = 'Z98_BERUECKSICHTIGUNGSTOERMENGENZAEHLWERK',
    Z99_MENGENUMWERTUNGUNVOLLSTAENDIG = 'Z99_MENGENUMWERTUNGUNVOLLSTAENDIG',
    ZA0_UHRZEITGESTELLT_SYNCHRONISATION = 'ZA0_UHRZEITGESTELLT_SYNCHRONISATION',
    ZA1_MESSWERTUNPLAUSIBEL = 'ZA1_MESSWERTUNPLAUSIBEL',
    ZC2_TARIFSCHALTGERAETDEFEKT = 'ZC2_TARIFSCHALTGERAETDEFEKT',
    ZC4_IMPULSWERTIGKEITNICHTAUSREICHEND = 'ZC4_IMPULSWERTIGKEITNICHTAUSREICHEND',
    ZA3_FALSCHERWANDLERFAKTOR = 'ZA3_FALSCHERWANDLERFAKTOR',
    ZA4_FEHLERHAFTEABLESUNG = 'ZA4_FEHLERHAFTEABLESUNG',
    ZA5_AENDERUNGDERBERECHNUNG = 'ZA5_AENDERUNGDERBERECHNUNG',
    ZA6_UMBAUDERMESSLOKATION = 'ZA6_UMBAUDERMESSLOKATION',
    ZA7_DATENBEARBEITUNGSFEHLER = 'ZA7_DATENBEARBEITUNGSFEHLER',
    ZA8_BRENNWERTKORREKTUR = 'ZA8_BRENNWERTKORREKTUR',
    ZA9_Z_ZAHL_KORREKTUR = 'ZA9_Z_ZAHL_KORREKTUR',
    ZB0_STOERUNG_DEFEKTMESSEINRICHTUNG = 'ZB0_STOERUNG_DEFEKTMESSEINRICHTUNG',
    ZB9_AENDERUNGTARIFSCHALTZEITEN = 'ZB9_AENDERUNGTARIFSCHALTZEITEN',
    ZG3_UMSTELLUNGGASQUALITAET = 'ZG3_UMSTELLUNGGASQUALITAET',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Messwertstatuszusatz}.
 */
export const MesswertstatuszusatzLabel: EnumLabels<Messwertstatuszusatz> = EnumLabels.of([
  [Messwertstatuszusatz.Z84_LEERSTAND, 'Leerstand'],
  [Messwertstatuszusatz.Z85_REALERZAEHLERUEBERLAUFGEPRUEFT, 'Realer Zaehlerüberlauf geprueft'],
  [Messwertstatuszusatz.Z86_PLAUSIBELWGKONTROLLABLESUNG, 'Plausibel wg. Kontrollablesung'],
  [Messwertstatuszusatz.Z87_PLAUSIBELWGKUNDENHINWEIS, 'Plausibel wg. Kundenhinweis'],
  [Messwertstatuszusatz.ZC3_AUSTAUSCHDESERSATZWERTES, 'Austausch des Ersatzwertes'],
  [Messwertstatuszusatz.Z88_VERGLEICHSMESSUNG_GEEICHT, 'Vergleichsmessung (geeicht)'], // Abweichung von BO4E
  [Messwertstatuszusatz.Z89_VERGLEICHSMESSUNG_NICHTGEEICHT, 'Vergleichsmessung (nicht geeicht)'], // Abweichung von BO4E
  [Messwertstatuszusatz.Z90_MESSWERTNACHBILDUNGAUSGEEICHTENWERTEN, 'Messwertnachbildung aus geeichten Werten'],
  [
    Messwertstatuszusatz.Z91_MESSWERTNACHBILDUNGAUSNICHTGEEICHTENWERTEN,
    'Messwertnachbildung aus nicht geeichten Werten',
  ],
  [Messwertstatuszusatz.Z92_INTERPOLATION, 'Interpolation'],
  [Messwertstatuszusatz.Z93_HALTEWERT, 'Haltewert'],
  [Messwertstatuszusatz.Z94_BILANZIERUNGNETZABSCHNITT, 'Bilanzierung Netzabschnitt'],
  [Messwertstatuszusatz.Z95_HISTORISCHEMESSWERTE, 'Historische Messwerte'],
  [Messwertstatuszusatz.ZJ2_STATISTISCHEMETHODE, 'Statistische Methode'],
  [Messwertstatuszusatz.Z74_KEINZUGANG, 'kein Zugang'],
  [Messwertstatuszusatz.Z75_KOMMUNIKATIONSSTOERUNG, 'Kommunikationsstörung'],
  [Messwertstatuszusatz.Z76_NETZAUSFALL, 'Netzausfall'],
  [Messwertstatuszusatz.Z77_SPANNUNGSAUSFALL, 'Spannungsausfall'],
  [Messwertstatuszusatz.Z78_GERAETEWECHSEL, 'Gerätewechsel'],
  [Messwertstatuszusatz.Z79_KALIBRIERUNG, 'Kalibrierung'],
  [
    Messwertstatuszusatz.Z80_GERAETARBEITETAUSSERHALBDERBETRIEBSBEDINGUNGEN,
    'Gerät arbeitet ausserhalb der Betriebsbedingungen',
  ],
  [Messwertstatuszusatz.Z81_MESSEINRICHTUNGGESTOERT_DEFEKT, 'Messeinrichtung gestört/defekt'],
  [Messwertstatuszusatz.Z82_UNSICHERHEITMESSUNG, 'Unsicherheit Messung'],
  [Messwertstatuszusatz.Z98_BERUECKSICHTIGUNGSTOERMENGENZAEHLWERK, 'Berücksichtigung Störmengenzählwerk'],
  [Messwertstatuszusatz.Z99_MENGENUMWERTUNGUNVOLLSTAENDIG, 'Mengenumwertung unvollständig'],
  [Messwertstatuszusatz.ZA0_UHRZEITGESTELLT_SYNCHRONISATION, 'Uhrzeit gestellt /Synchronisation'],
  [Messwertstatuszusatz.ZA1_MESSWERTUNPLAUSIBEL, 'Messwert unplausibel'],
  [Messwertstatuszusatz.ZC2_TARIFSCHALTGERAETDEFEKT, 'Tarifschaltgeraet defekt'],
  [Messwertstatuszusatz.ZC4_IMPULSWERTIGKEITNICHTAUSREICHEND, 'Impulswertigkeit nicht ausreichend'],
  [Messwertstatuszusatz.ZA3_FALSCHERWANDLERFAKTOR, 'Falscher Wandlerfaktor'],
  [Messwertstatuszusatz.ZA4_FEHLERHAFTEABLESUNG, 'Fehlerhafte Ablesung'],
  [Messwertstatuszusatz.ZA5_AENDERUNGDERBERECHNUNG, 'Änderung der Berechnung'],
  [Messwertstatuszusatz.ZA6_UMBAUDERMESSLOKATION, 'Umbau der Messlokation'],
  [Messwertstatuszusatz.ZA7_DATENBEARBEITUNGSFEHLER, 'Datenbearbeitungsfehler'],
  [Messwertstatuszusatz.ZA8_BRENNWERTKORREKTUR, 'Brennwertkorrektur'],
  [Messwertstatuszusatz.ZA9_Z_ZAHL_KORREKTUR, 'Z-Zahl-Korrektur'], // Abweichung von BO4E
  [Messwertstatuszusatz.ZB0_STOERUNG_DEFEKTMESSEINRICHTUNG, 'Störung / Defekt Messeinrichtung'],
  [Messwertstatuszusatz.ZB9_AENDERUNGTARIFSCHALTZEITEN, 'Änderung Tarifschaltzeiten'],
  [Messwertstatuszusatz.ZG3_UMSTELLUNGGASQUALITAET, 'Umstellung Gasqualität'],
]);
