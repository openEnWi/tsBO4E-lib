import {EnumLabels} from './util/enum-labels';

/**
 * Voraussetzungen, die erfüllt sein müssen, damit dieser Tarif zur Anwendung kommen kann.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Voraussetzungen](https://www.bo4e.de/dokumentation/enumerations/enum-voraussetzungen)
 */
export enum Voraussetzungen {
    EINZUGSERMAECHTIGUNG = 'EINZUGSERMAECHTIGUNG',
    ZEITPUNKT = 'ZEITPUNKT',
    LIEFERANBINDUNG_EINE = 'LIEFERANBINDUNG_EINE',
    LIEFERANBINDUNG_ALLE = 'LIEFERANBINDUNG_ALLE',
    GEWERBE = 'GEWERBE',
    LASTPROFIL = 'LASTPROFIL',
    ZAEHLERTYP_GROESSE = 'ZAEHLERTYP_GROESSE',
    AUSSCHLUSS_GROSSVERBRAUCHER = 'AUSSCHLUSS_GROSSVERBRAUCHER',
    NEUKUNDE = 'NEUKUNDE',
    BESTIMMTE_VERTRAGSFORMALITAETEN = 'BESTIMMTE_VERTRAGSFORMALITAETEN',
    SELBSTABLESUNG = 'SELBSTABLESUNG',
    ONLINEVORAUSSETZUNG = 'ONLINEVORAUSSETZUNG',
    MINDESTUMSATZ = 'MINDESTUMSATZ',
    ZUSATZPRODUKT = 'ZUSATZPRODUKT',
    NEUKUNDE_MIT_VORAUSSETZUNGEN = 'NEUKUNDE_MIT_VORAUSSETZUNGEN',
    DIREKTVERTRIEB = 'DIREKTVERTRIEB',
    ANSCHLUSSART = 'ANSCHLUSSART',
    ANSCHLUSSWERT = 'ANSCHLUSSWERT',
    ALTER_KUNDENANLAGE = 'ALTER_KUNDENANLAGE',
    ANLAGEBESCHAFFENHEIT = 'ANLAGEBESCHAFFENHEIT',
    BETRIEBSSTUNDENBEGRENZUNG = 'BETRIEBSSTUNDENBEGRENZUNG',
    FREIGABEZEITEN = 'FREIGABEZEITEN',
    FAMILIENSTRUKTUR = 'FAMILIENSTRUKTUR',
    MITGLIEDSCHAFT = 'MITGLIEDSCHAFT',
    STAATLICHE_FOERDERUNG = 'STAATLICHE_FOERDERUNG',
    BESONDERE_VERBRAUCHSSTELLE = 'BESONDERE_VERBRAUCHSSTELLE',
    NIEDRIGENERGIE = 'NIEDRIGENERGIE',
    ORTSTEILE_LIEFERGEBIET = 'ORTSTEILE_LIEFERGEBIET',
    WAERMEBEDARF_ERDGAS = 'WAERMEBEDARF_ERDGAS',
    MAX_ZAEHLER_LIEFERSTELLEN = 'MAX_ZAEHLER_LIEFERSTELLEN',
    LIEFERUNGSBESCHRAENKUNG_GASART = 'LIEFERUNGSBESCHRAENKUNG_GASART',
    KOMBI_BONI = 'KOMBI_BONI',
    ALTVERTRAG = 'ALTVERTRAG',
    VORGESCHRIEBENE_ZUSATZANLAGE = 'VORGESCHRIEBENE_ZUSATZANLAGE',
    MEHRERE_ZAEHLER_ABNAHMESTELLEN = 'MEHRERE_ZAEHLER_ABNAHMESTELLEN',
    BESTIMMTER_ABNAHMEFALL = 'BESTIMMTER_ABNAHMEFALL',
    ZUSATZMODALITAET = 'ZUSATZMODALITAET',
    NACHWEIS_ZAHLUNGSFAEHIGKEIT = 'NACHWEIS_ZAHLUNGSFAEHIGKEIT',
    UMSTELLUNG_ENERGIEART = 'UMSTELLUNG_ENERGIEART',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Voraussetzungen}.
 */
export const VoraussetzungenLabel: EnumLabels<Voraussetzungen> = EnumLabels.of([
  [Voraussetzungen.EINZUGSERMAECHTIGUNG, 'Einzugsermaechtigung'],
  [Voraussetzungen.ZEITPUNKT, 'Vertrag muss zu einem bestimmten Zeitpunkt noch bestehen'],
  [Voraussetzungen.LIEFERANBINDUNG_EINE, 'Lieferantenbindung für diese Energieart'],
  [Voraussetzungen.LIEFERANBINDUNG_ALLE, 'Lieferantenbindung für alle Energiearten, die der Versorger anbietet'],
  [Voraussetzungen.GEWERBE, 'Gewerbenachweis'],
  [Voraussetzungen.LASTPROFIL, 'Kunde muss einem bestimmten Lastprofil zuzuordnen sein'],
  [Voraussetzungen.ZAEHLERTYP_GROESSE, 'bestimmter Zaehlertyp oder Zaehlergroeße'],
  [
    Voraussetzungen.AUSSCHLUSS_GROSSVERBRAUCHER,
    'Ausschluss von Großverbrauchern wie Industriekunden oder produzierendes Gewerbe',
  ],
  [Voraussetzungen.NEUKUNDE, 'Neukunden ohne bisherige Lieferanbindung'],
  [
    Voraussetzungen.BESTIMMTE_VERTRAGSFORMALITAETEN,
    'bestimmte Vertragsformalitaeten wie z.B. Anmeldeformular muss an bestimmte Adresse versandt werden',
  ],
  [Voraussetzungen.SELBSTABLESUNG, 'Selbstablesung durch den Kunden'],
  [Voraussetzungen.ONLINEVORAUSSETZUNG, 'Onlinevoraussetzung'],
  [
    Voraussetzungen.MINDESTUMSATZ,
    'Mindestumsatz in einer bestimmten Zeiteinheit wie z.B. Mindestjahresumsatz 2500 EURO',
  ],
  [
    Voraussetzungen.ZUSATZPRODUKT,
    'Zusatzprodukt zu bereits bestehendem Lieferverhaeltnis beim Versorger in dieser Energieart',
  ],
  [Voraussetzungen.NEUKUNDE_MIT_VORAUSSETZUNGEN, 'geworbener Neukunde muss bestimmte Voraussetzungen erfüllen'],
  [Voraussetzungen.DIREKTVERTRIEB, 'Kunde wird durch Direktvertrieb gewonnen'],
  [Voraussetzungen.ANSCHLUSSART, 'Anlage mit bestimmter Anschlussart wie z.B. Festanschluss'],
  [Voraussetzungen.ANSCHLUSSWERT, 'bestimmte Anschlusswerte wie z. B. mindestens 30 kW'],
  [Voraussetzungen.ALTER_KUNDENANLAGE, 'Alter einer Kundenanlage (z.B. Anlage wurde nach dem 01.01.2005 installiert)'],
  [
    Voraussetzungen.ANLAGEBESCHAFFENHEIT,
    'bestimmte Anlagebeschaffenheit, wie bivalente Energieversorgung, Geräte o.ä.',
  ],
  [Voraussetzungen.BETRIEBSSTUNDENBEGRENZUNG, 'Betriebsstundenbegrenzung z.B. max 1500h/a oder mindestens 1000h/a'],
  [Voraussetzungen.FREIGABEZEITEN, 'vorgeschriebene Freigabezeiten'],
  [
    Voraussetzungen.FAMILIENSTRUKTUR,
    'Familienstruktur wie z.B. bestimmte Anzahl Kinder oder Personen im Haushalt oder Eheleute',
  ],
  [Voraussetzungen.MITGLIEDSCHAFT, 'Mitgliedschaft in bestimmten Vereinen oder Verbaenden'],
  [Voraussetzungen.STAATLICHE_FOERDERUNG, 'staatliche Foerderung wie z.B. Sozialtarif oder Studentenausweis'],
  [Voraussetzungen.BESONDERE_VERBRAUCHSSTELLE, 'besondere Verbrauchsstellen wie Kirchen, Vereinsgebaeude usw.'],
  [Voraussetzungen.NIEDRIGENERGIE, 'Niedrigenergieaustattung des Hauses'],
  [Voraussetzungen.ORTSTEILE_LIEFERGEBIET, 'nur für bestimmte Ortsteile in diesem Liefergebiet'],
  [Voraussetzungen.WAERMEBEDARF_ERDGAS, 'Waermebedarf wird nur oder überwiegend mit Erdgas gedeckt'],
  [Voraussetzungen.MAX_ZAEHLER_LIEFERSTELLEN, 'beschraenkt auf max. Anzahl Zaehler oder Abnahmestellen'],
  [
    Voraussetzungen.LIEFERUNGSBESCHRAENKUNG_GASART,
    'Lieferungsbeschraenkung auf bestimmte Gasart, wie H-Gas oder L-Gas',
  ],
  [
    Voraussetzungen.KOMBI_BONI,
    'Kombination von Boni, von denen mindestens einer sehr unwahrscheinlich zu erreichen ist',
  ],
  [Voraussetzungen.ALTVERTRAG, 'nur für Altvertraege, die weiterhin gueltig sind'],
  [Voraussetzungen.VORGESCHRIEBENE_ZUSATZANLAGE, 'vorgeschriebene Zusatzanlage wie z.B. Solaranlage etc.'],
  [Voraussetzungen.MEHRERE_ZAEHLER_ABNAHMESTELLEN, 'mehr als 1 Zaehler oder 1 Abnahmestelle'],
  [Voraussetzungen.BESTIMMTER_ABNAHMEFALL, 'bestimmter Abnahmefall wie z.B. nur Gemeinschaftsheizungen o.ae.'],
  [Voraussetzungen.ZUSATZMODALITAET, 'Zahlungsmodalitaet wie z.B. halbjaehrliche Zahlungsweise'],
  [Voraussetzungen.NACHWEIS_ZAHLUNGSFAEHIGKEIT, 'Nachweis der Zahlungsfaehigkeit wie z.B. Bonitaetsprüfung'],
  [Voraussetzungen.UMSTELLUNG_ENERGIEART, 'Umstellung der Energieart'],
]);
