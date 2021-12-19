import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung der verschiedenen Kalkulationsmethoden für ein Preisblatt.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [ENUM Kalkulationsmethode](https://www.bo4e.de/dokumentation/enumerations/enum-kalkulationsmethode)
 */
export enum Kalkulationsmethode {
    STUFEN = 'STUFEN',
    ZONEN = 'ZONEN',
    VORZONEN_GP = 'VORZONEN_GP',
    SIGMOID = 'SIGMOID',
    BLINDARBEIT_GT_50_PROZENT = 'BLINDARBEIT_GT_50_PROZENT',
    BLINDARBEIT_GT_40_PROZENT = 'BLINDARBEIT_GT_40_PROZENT',
    BLINDARBEIT_MIT_FREIMENGE = 'BLINDARBEIT_MIT_FREIMENGE',
    AP_GP_ZONEN = 'AP_GP_ZONEN',
    LP_INSTALL_LEISTUNG = 'LP_INSTALL_LEISTUNG',
    AP_TRANSPORT_ODER_VERTEILNETZ = 'AP_TRANSPORT_ODER_VERTEILNETZ',
    AP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID = 'AP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID',
    LP_JAHRESVERBRAUCH = 'LP_JAHRESVERBRAUCH',
    LP_TRANSPORT_ODER_VERTEILNETZ = 'LP_TRANSPORT_ODER_VERTEILNETZ',
    LP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID = 'LP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID',
    FUNKTIONEN = 'FUNKTIONEN',
    // eslint-disable-next-line max-len
    VERBRAUCH_UEBER_SLP_GRENZE_FUNKTIONSBEZOGEN_WEITERE_BERECHNUNG_ALS_LGK = 'VERBRAUCH_UEBER_SLP_GRENZE_FUNKTIONSBEZOGEN_WEITERE_BERECHNUNG_ALS_LGK',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Kalkulationsmethode}.
 */
export const KalkulationsmethodeLabel: EnumLabels<Kalkulationsmethode> = EnumLabels.of([
  [
    Kalkulationsmethode.STUFEN,
    // eslint-disable-next-line max-len
    'Stufenmodell, d.h. die Gesamtmenge wird in eine Stufe eingeordnet und für die gesamte Menge gilt der so ermittelte Preis',
  ],
  [
    Kalkulationsmethode.ZONEN,
    // eslint-disable-next-line max-len
    'Zonenmodell, d.h. die Gesamtmenge wird auf die Zonen aufgeteilt und für die Teilmengen gilt der jeweilige Preis der Zone.',
  ],
  [Kalkulationsmethode.VORZONEN_GP, 'Vorzonengrundpreis'],
  [Kalkulationsmethode.SIGMOID, 'Sigmoidfunktion'],
  [Kalkulationsmethode.BLINDARBEIT_GT_50_PROZENT, 'Blindarbeit oberhalb 50% der Wirkarbeit'],
  [Kalkulationsmethode.BLINDARBEIT_GT_40_PROZENT, 'Blindarbeit oberhalb 40% der Wirkarbeit'],
  [
    Kalkulationsmethode.BLINDARBEIT_MIT_FREIMENGE,
    'Blindarbeit. Freimenge ist durch cos phi oder prozentualem Anteil der Wirkarbeit angegeben.',
  ],
  [Kalkulationsmethode.AP_GP_ZONEN, 'Arbeits- und Grundpreis gezont'],
  [Kalkulationsmethode.LP_INSTALL_LEISTUNG, 'Leistungsentgelt auf Grundlage der installierten Leistung'],
  [Kalkulationsmethode.AP_TRANSPORT_ODER_VERTEILNETZ, 'AP auf Grundlage Transport- oder Verteilnetz'],
  [
    Kalkulationsmethode.AP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID,
    'AP auf Grundlage Transport- oder Verteilnetz, Ortsverteilnetz über Sigmoid',
  ],
  [Kalkulationsmethode.LP_JAHRESVERBRAUCH, 'Leistungsentgelt auf Grundlage des Jahresverbrauchs'],
  [Kalkulationsmethode.LP_TRANSPORT_ODER_VERTEILNETZ, 'LP auf Grundlage Transport- oder Verteilnetz'],
  [
    Kalkulationsmethode.LP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID,
    'LP auf Grundlage Transport- oder Verteilnetz, Ortsverteilnetz über Sigmoid',
  ],
  [
    Kalkulationsmethode.FUNKTIONEN,
    'Funktionsbezogene Leistungsermittlung bei Verbräuchen oberhalb der SLP Grenze. ,ähnlich Sigmoid)',
  ],
  [
    Kalkulationsmethode.VERBRAUCH_UEBER_SLP_GRENZE_FUNKTIONSBEZOGEN_WEITERE_BERECHNUNG_ALS_LGK,
    // eslint-disable-next-line max-len
    'Bei einem Verbrauch über der SLP-Grenze (letzte Staffelgrenze überschritten) erfolgt die Berechnung funktionsbezogen ,s.o.) als LGK.',
  ],
]);
