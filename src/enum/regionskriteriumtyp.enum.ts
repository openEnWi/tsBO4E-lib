import {EnumLabels} from './util/enum-labels';

/**
 * Klassifizierung der Kriterien für eine regionale Eingrenzung.
 *
 * Version 1.1
 * veröffentlicht am 27. September 2021
 *
 * @see [ENUM Regionskriteriumtyp](https://www.bo4e.de/dokumentation/enumerations/enum-regionskriteriumtyp/27-9-2021)
 */
export enum Regionskriteriumtyp {
    BUNDESLANDKENNZIFFER = 'BUNDESLANDKENNZIFFER',
    BUNDESLAND_NAME = 'BUNDESLAND_NAME',
    MARKTGEBIET_NUMMER = 'MARKTGEBIET_NUMMER',
    MARKTGEBIET_NAME = 'MARKTGEBIET_NAME',
    REGELGEBIET_NUMMER = 'REGELGEBIET_NUMMER',
    REGELGEBIET_NAME = 'REGELGEBIET_NAME',
    NETZ_STROM = 'NETZ_STROM',
    NETZ_GAS = 'NETZ_GAS',
    NETZBETREIBER_NUMMER_STROM = 'NETZBETREIBER_NUMMER_STROM',
    NETZBETREIBER_NUMMER_GAS = 'NETZBETREIBER_NUMMER_GAS',
    NETZBETREIBER_NAME_STROM = 'NETZBETREIBER_NAME_STROM',
    NETZBETREIBER_NAME_GAS = 'NETZBETREIBER_NAME_GAS',
    BILANZIERUNGS_GEBIET_NUMMER = 'BILANZIERUNGS_GEBIET_NUMMER',
    MSB_NUMMER = 'MSB_NUMMER',
    MSB_NAME = 'MSB_NAME',
    VERSORGER_NUMMER = 'VERSORGER_NUMMER',
    VERSORGER_NAME = 'VERSORGER_NAME',
    GRUNDVERSORGER_NUMMER_STROM = 'GRUNDVERSORGER_NUMMER_STROM',
    GRUNDVERSORGER_NAME_STROM = 'GRUNDVERSORGER_NAME_STROM',
    GRUNDVERSORGER_NUMMER_GAS = 'GRUNDVERSORGER_NUMMER_GAS',
    GRUNDVERSORGER_NAME_GAS = 'GRUNDVERSORGER_NAME_GAS',
    KREIS_NAME = 'KREIS_NAME',
    KREISKENNZIFFER = 'KREISKENNZIFFER',
    GEMEINDE_NAME = 'GEMEINDE_NAME',
    GEMEINDEKENNZIFFER = 'GEMEINDEKENNZIFFER',
    POSTLEITZAHL = 'POSTLEITZAHL',
    ORT = 'ORT',
    POSTORT = 'POSTORT',
    EINWOHNERZAHL_GEMEINDE = 'EINWOHNERZAHL_GEMEINDE',
    EINWOHNERZAHL_ORT = 'EINWOHNERZAHL_ORT',
    KM_UMKREIS = 'KM_UMKREIS',
    BUNDESWEIT = 'BUNDESWEIT',
    PLZ_BEREICH = 'PLZ_BEREICH',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Regionskriteriumtyp}.
 */
export const RegionskriteriumtypLabel: EnumLabels<Regionskriteriumtyp> = EnumLabels.of([
  [Regionskriteriumtyp.BUNDESLANDKENNZIFFER, 'offizielle Bundeslandkennziffer'],
  [Regionskriteriumtyp.BUNDESLAND_NAME, 'Bundesland Name'],
  [Regionskriteriumtyp.MARKTGEBIET_NUMMER, 'offizielle Marktgebiet-Codenummer'],
  [Regionskriteriumtyp.MARKTGEBIET_NAME, 'Marktgebiet Name'],
  [Regionskriteriumtyp.REGELGEBIET_NUMMER, 'offizielle Regelgebiet Nummer'],
  [Regionskriteriumtyp.REGELGEBIET_NAME, 'Regelgebiet Name'],
  [Regionskriteriumtyp.NETZ_STROM, 'Identifikation des Netzes Strom'],
  [Regionskriteriumtyp.NETZ_GAS, 'Identifikation des Netzes Gas'],
  [Regionskriteriumtyp.NETZBETREIBER_NUMMER_STROM, 'offizielle Netzbetreiber-Codenummer Strom'],
  [Regionskriteriumtyp.NETZBETREIBER_NUMMER_GAS, 'offizielle Netzbetreiber-Codenummer Gas'],
  [Regionskriteriumtyp.NETZBETREIBER_NAME_STROM, 'Netzbetreiber Name Strom'],
  [Regionskriteriumtyp.NETZBETREIBER_NAME_GAS, 'Netzbetreiber Name Gas'],
  [Regionskriteriumtyp.BILANZIERUNGS_GEBIET_NUMMER, 'Strom: Bilanzierungsgebietsnummer, Gas: Netzkontonummer'],
  [Regionskriteriumtyp.MSB_NUMMER, 'offizielle Messstellenbetreiber-Codenummer'],
  [Regionskriteriumtyp.MSB_NAME, 'Name des MSB'],
  [Regionskriteriumtyp.VERSORGER_NUMMER, 'offizielle Lieferanten-Codenummer eines Versorgers'],
  [Regionskriteriumtyp.VERSORGER_NAME, 'Name eines Versorgers'],
  [Regionskriteriumtyp.GRUNDVERSORGER_NUMMER_STROM, 'offizielle Lieferanten-Codenummer des Strom-Grundversorgers'],
  [Regionskriteriumtyp.GRUNDVERSORGER_NAME_STROM, 'Name des Strom-Grundversorgers'],
  [Regionskriteriumtyp.GRUNDVERSORGER_NUMMER_GAS, 'offizielle Lieferanten-Codenummer des Gas-Grundversorgers'],
  [Regionskriteriumtyp.GRUNDVERSORGER_NAME_GAS, 'Name des Gas-Grundversorgers'],
  [Regionskriteriumtyp.KREIS_NAME, 'Kreis'],
  [Regionskriteriumtyp.KREISKENNZIFFER, 'offizielle Kreiskennziffer'],
  [Regionskriteriumtyp.GEMEINDE_NAME, 'Gemeinde'],
  [Regionskriteriumtyp.GEMEINDEKENNZIFFER, 'offizielle Gemeindekennziffer'],
  [Regionskriteriumtyp.POSTLEITZAHL, 'Postleitzahl'],
  [Regionskriteriumtyp.ORT, 'Ort'],
  [Regionskriteriumtyp.POSTORT, 'Kriterium bestehend aus Postleitzahl und Ort'],
  [Regionskriteriumtyp.EINWOHNERZAHL_GEMEINDE, 'Einwohnerzahl Gemeinde'],
  [Regionskriteriumtyp.EINWOHNERZAHL_ORT, 'Einwohnerzahl Ort'],
  [Regionskriteriumtyp.KM_UMKREIS, 'km Umkreis'],
  [Regionskriteriumtyp.BUNDESWEIT, 'Bundesweite Betrachtung'],
  [Regionskriteriumtyp.PLZ_BEREICH, 'Postleitzahlenbereich'],
]);
