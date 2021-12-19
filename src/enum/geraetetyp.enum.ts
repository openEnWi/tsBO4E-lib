import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung möglicher abzurechnender Gerätetypen.
 *
 * Version 1.1
 * veröffentlicht am 31. Mai 2021
 *
 * @see [ENUM Geraetetyp](https://www.bo4e.de/dokumentation/enumerations/enum-gebiettyp)
 */
export enum Geraetetyp {
    WECHSELSTROMZAEHLER= 'WECHSELSTROMZAEHLER',
    DREHSTROMZAEHLER= 'DREHSTROMZAEHLER',
    ZWEIRICHTUNGSZAEHLER= 'ZWEIRICHTUNGSZAEHLER',
    RLM_ZAEHLER= 'RLM_ZAEHLER',
    BALGENGASZAEHLER= 'BALGENGASZAEHLER',
    MAXIMUMZAEHLER= 'MAXIMUMZAEHLER',
    MULTIPLEXANLAGE= 'MULTIPLEXANLAGE',
    PAUSCHALANLAGE= 'PAUSCHALANLAGE',
    VERSTAERKERANLAGE= 'VERSTAERKERANLAGE',
    SUMMATIONSGERAET= 'SUMMATIONSGERAET',
    IMPULSGEBER= 'IMPULSGEBER',
    EDL_21_ZAEHLERAUFSATZ= 'EDL_21_ZAEHLERAUFSATZ',
    VIER_QUADRANTEN_LASTGANGZAEHLER= 'VIER_QUADRANTEN_LASTGANGZAEHLER',
    MENGENUMWERTER= 'MENGENUMWERTER',
    STROMWANDLER= 'STROMWANDLER',
    SPANNUNGSWANDLER= 'SPANNUNGSWANDLER',
    KOMBIMESSWANDLER= 'KOMBIMESSWANDLER',
    BLOCKSTROMWANDLER= 'BLOCKSTROMWANDLER',
    DATENLOGGER= 'DATENLOGGER',
    KOMMUNIKATIONSANSCHLUSS= 'KOMMUNIKATIONSANSCHLUSS',
    MODEM= 'MODEM',
    TELEKOMMUNIKATIONSEINRICHTUNG= 'TELEKOMMUNIKATIONSEINRICHTUNG',
    DREHKOLBENGASZAEHLER= 'DREHKOLBENGASZAEHLER',
    TURBINENRADGASZAEHLER= 'TURBINENRADGASZAEHLER',
    ULTRASCHALLZAEHLER= 'ULTRASCHALLZAEHLER',
    WIRBELGASZAEHLER= 'WIRBELGASZAEHLER',
    MODERNE_MESSEINRICHTUNG= 'MODERNE_MESSEINRICHTUNG',
    INTELLIGENTES_MESSYSTEM= 'INTELLIGENTES_MESSYSTEM',
    ELEKTRONISCHER_HAUSHALTSZAEHLER= 'ELEKTRONISCHER_HAUSHALTSZAEHLER',
    STEUEREINRICHTUNG= 'STEUEREINRICHTUNG',
    TARIFSCHALTGERAET= 'TARIFSCHALTGERAET',
    RUNDSTEUEREMPFAENGER= 'RUNDSTEUEREMPFAENGER',
    OPTIONALE_ZUS_ZAEHLEINRICHTUNG= 'OPTIONALE_ZUS_ZAEHLEINRICHTUNG',
    MESSWANDLERSATZ_IMS_MME= 'MESSWANDLERSATZ_IMS_MME',
    KOMBIMESSWANDLER_IMS_MME= 'KOMBIMESSWANDLER_IMS_MME',
    TARIFSCHALTGERAET_IMS_MME= 'TARIFSCHALTGERAET_IMS_MME',
    RUNDSTEUEREMPFAENGER_IMS_MME= 'RUNDSTEUEREMPFAENGER_IMS_MME',
    TEMPERATUR_KOMPENSATION= 'TEMPERATUR_KOMPENSATION',
    HOECHSTBELASTUNGS_ANZEIGER= 'HOECHSTBELASTUNGS_ANZEIGER',
    SONSTIGES_GERAET= 'SONSTIGES_GERAET',
    PREPAYMENTZAEHLER= 'PREPAYMENTZAEHLER',
    EDL_21= 'EDL_21',
    ZAEHLER_96_H= 'ZAEHLER_96_H', // Abweichung von BO4E
    EDL_40_ZAEHLERAUFSATZ= 'EDL_40_ZAEHLERAUFSATZ'
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Geraetetyp}.
 */
export const GeraetetypLabel: EnumLabels<Geraetetyp> = EnumLabels.of([
  [Geraetetyp.WECHSELSTROMZAEHLER, 'Wechselstromzähler'],
  [Geraetetyp.DREHSTROMZAEHLER, 'Drehstromzähler'],
  [Geraetetyp.ZWEIRICHTUNGSZAEHLER, 'Zweirichtungszähler'],
  [Geraetetyp.RLM_ZAEHLER, 'RLM-Zähler'],
  [Geraetetyp.BALGENGASZAEHLER, 'Balgengaszähler'],
  [Geraetetyp.MAXIMUMZAEHLER, 'Maximumzähler (Schleppzähler)'],
  [Geraetetyp.MULTIPLEXANLAGE, 'Multiplexeranlage'],
  [Geraetetyp.PAUSCHALANLAGE, 'Pauschalanlagen'],
  [Geraetetyp.VERSTAERKERANLAGE, 'Verstärkeranlage'],
  [Geraetetyp.SUMMATIONSGERAET, 'Summationsgerät'],
  [Geraetetyp.IMPULSGEBER, 'Impulsgeber'],
  [Geraetetyp.EDL_21_ZAEHLERAUFSATZ, 'EDL 21 Zähleraufsatz für Zähler'],
  [Geraetetyp.VIER_QUADRANTEN_LASTGANGZAEHLER, 'Vier-Quadranten-Lastgangzähler'],
  [Geraetetyp.MENGENUMWERTER, 'Mengenumwerter'],
  [Geraetetyp.STROMWANDLER, 'Stromwandler'],
  [Geraetetyp.SPANNUNGSWANDLER, 'Spannungs-Wandler'],
  [Geraetetyp.KOMBIMESSWANDLER, 'Kombimesswandler'],
  [Geraetetyp.BLOCKSTROMWANDLER, 'Blockstromwandler'],
  [Geraetetyp.DATENLOGGER, 'Datenlogger'],
  [Geraetetyp.KOMMUNIKATIONSANSCHLUSS, 'Kommunikationsanschluss'],
  [Geraetetyp.MODEM, 'Modem'],
  [
    Geraetetyp.TELEKOMMUNIKATIONSEINRICHTUNG,
    'vom Messstellenbetreiber beigestellte Telekommunikationseinrichtung (Telefonanschluss)',
  ],
  [Geraetetyp.DREHKOLBENGASZAEHLER, 'Drehkolbengaszähler'],
  [Geraetetyp.TURBINENRADGASZAEHLER, 'Turbinenradgaszähler'],
  [Geraetetyp.ULTRASCHALLZAEHLER, 'Ultraschallzähler'],
  [Geraetetyp.WIRBELGASZAEHLER, 'Wirbelgaszähler'],
  [Geraetetyp.MODERNE_MESSEINRICHTUNG, 'moderne Messeinrichtung'],
  [Geraetetyp.INTELLIGENTES_MESSYSTEM, 'Intelligentes Messystem'],
  [Geraetetyp.ELEKTRONISCHER_HAUSHALTSZAEHLER, 'elektronischer Haushaltszähler'],
  [Geraetetyp.STEUEREINRICHTUNG, 'Steuereinrichtung'],
  [Geraetetyp.TARIFSCHALTGERAET, 'Tarifschaltgerät'],
  [Geraetetyp.RUNDSTEUEREMPFAENGER, 'Rundsteuerempfänger'],
  [Geraetetyp.OPTIONALE_ZUS_ZAEHLEINRICHTUNG, 'optionale zusätzliche Zähleinrichtung'],
  [Geraetetyp.MESSWANDLERSATZ_IMS_MME, 'Messwandlersatz Strom iMS und mME], NSP'],
  [Geraetetyp.KOMBIMESSWANDLER_IMS_MME, 'Kombimesswandlersatz (Strom u. Spg) iMS und mME'],
  [Geraetetyp.TARIFSCHALTGERAET_IMS_MME, 'Tarifschaltung iMS und mME'],
  [Geraetetyp.RUNDSTEUEREMPFAENGER_IMS_MME, 'Rundsteuerempfänger iMS und mME'],
  [Geraetetyp.TEMPERATUR_KOMPENSATION, 'Temperaturkompensation'],
  [Geraetetyp.HOECHSTBELASTUNGS_ANZEIGER, 'Höchsbelastungsanzeiger'],
  [Geraetetyp.SONSTIGES_GERAET, 'Sonstiges Gerät'],
  [Geraetetyp.PREPAYMENTZAEHLER, 'Prepaymentzähler'],
  [Geraetetyp.EDL_21, 'EDL21'],
  [Geraetetyp.ZAEHLER_96_H, '96 h Zähler'], // Abweichung von BO4E
  [Geraetetyp.EDL_40_ZAEHLERAUFSATZ, 'EDL 40 Zähleraufsatz für Zähler'],
]);
