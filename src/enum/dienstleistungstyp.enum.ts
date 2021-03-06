import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung möglicher abzurechnender Dienstleistungen.
 *
 * veröffentlicht am 18. April 2018
 *
 * @see [ENUM Dienstleistungstyp](https://www.bo4e.de/dokumentation/enumerations/enum-dienstleistungstyp)
 */
export enum Dienstleistungstyp {
    DATENBEREITSTELLUNG_TAEGLICH = 'DATENBEREITSTELLUNG_TAEGLICH',
    DATENBEREITSTELLUNG_WOECHENTLICH = 'DATENBEREITSTELLUNG_WOECHENTLICH',
    DATENBEREITSTELLUNG_MONATLICH = 'DATENBEREITSTELLUNG_MONATLICH',
    DATENBEREITSTELLUNG_JAEHRLICH = 'DATENBEREITSTELLUNG_JAEHRLICH',
    DATENBEREITSTELLUNG_HISTORISCHE_LG = 'DATENBEREITSTELLUNG_HISTORISCHE_LG',
    DATENBEREITSTELLUNG_STUENDLICH = 'DATENBEREITSTELLUNG_STUENDLICH',
    DATENBEREITSTELLUNG_VIERTELJAEHRLICH = 'DATENBEREITSTELLUNG_VIERTELJAEHRLICH',
    DATENBEREITSTELLUNG_HALBJAEHRLICH = 'DATENBEREITSTELLUNG_HALBJAEHRLICH',
    DATENBEREITSTELLUNG_MONATLICH_ZUSAETZLICH = 'DATENBEREITSTELLUNG_MONATLICH_ZUSAETZLICH',
    DATENBEREITSTELLUNG_EINMALIG = 'DATENBEREITSTELLUNG_EINMALIG',
    AUSLESUNG_2X_TAEGLICH_FERNAUSLESUNG = 'AUSLESUNG_2X_TAEGLICH_FERNAUSLESUNG',
    AUSLESUNG_3X_TAEGLICH_FERNAUSLESUNG = 'AUSLESUNG_3X_TAEGLICH_FERNAUSLESUNG',
    AUSLESUNG_TAEGLICH_FERNAUSLESUNG = 'AUSLESUNG_TAEGLICH_FERNAUSLESUNG',
    AUSLESUNG_MANUELL_MSB = 'AUSLESUNG_MANUELL_MSB',
    AUSLESUNG_MONATLICH_FERNAUSLESUNG = 'AUSLESUNG_MONATLICH_FERNAUSLESUNG',
    AUSLESUNG_JAEHRLICH_FERNAUSLESUNG = 'AUSLESUNG_JAEHRLICH_FERNAUSLESUNG',
    AUSLESUNG_MDE = 'AUSLESUNG_MDE',
    ABLESUNG_MONATLICH = 'ABLESUNG_MONATLICH',
    ABLESUNG_VIERTELJAEHRLICH = 'ABLESUNG_VIERTELJAEHRLICH',
    ABLESUNG_HALBJAEHRLICH = 'ABLESUNG_HALBJAEHRLICH',
    ABLESUNG_JAEHRLICH = 'ABLESUNG_JAEHRLICH',
    AUSLESUNG_FERNAUSLESUNG = 'AUSLESUNG_FERNAUSLESUNG',
    ABLESUNG_ZUSAETZLICH_MSB = 'ABLESUNG_ZUSAETZLICH_MSB',
    ABLESUNG_ZUSAETZLICH_KUNDE = 'ABLESUNG_ZUSAETZLICH_KUNDE',
    AUSLESUNG_FERNAUSLESUNG_ZUSAETZLICH_MSB = 'AUSLESUNG_FERNAUSLESUNG_ZUSAETZLICH_MSB',
    AUSLESUNG_MOATLICH_FERNAUSLESUNG = 'AUSLESUNG_MOATLICH_FERNAUSLESUNG',
    AUSLESUNG_STUENDLICH_FERNAUSLESUNG = 'AUSLESUNG_STUENDLICH_FERNAUSLESUNG',
    AUSLESUNG_TEMPERATURMENGENUMWERTER = 'AUSLESUNG_TEMPERATURMENGENUMWERTER',
    AUSLESUNG_ZUSTANDSMENGENUMWERTER = 'AUSLESUNG_ZUSTANDSMENGENUMWERTER',
    AUSLESUNG_SYSTEMMENGENUMWERTER = 'AUSLESUNG_SYSTEMMENGENUMWERTER',
    AUSLESUNG_VORGANG = 'AUSLESUNG_VORGANG',
    AUSLESUNG_KOMPAKTMENGENUMWERTER = 'AUSLESUNG_KOMPAKTMENGENUMWERTER',
    SPERRUNG = 'SPERRUNG',
    ENTSPERRUNG = 'ENTSPERRUNG',
    MAHNKOSTEN = 'MAHNKOSTEN',
    INKASSOKOSTEN = 'INKASSOKOSTEN',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Dienstleistungstyp}.
 */
export const DienstleistungstypLabel: EnumLabels<Dienstleistungstyp> = EnumLabels.of([
  [Dienstleistungstyp.DATENBEREITSTELLUNG_TAEGLICH, 'Datenbereitstellung täglich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_WOECHENTLICH, 'Datenbereitstellung wöchentlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_MONATLICH, 'Datenbereitstellung monatlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_JAEHRLICH, 'Datenbereitstellung jährlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_HISTORISCHE_LG, 'Datenbereitstellung historischer Lastgänge'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_STUENDLICH, 'Datenbereitstellung stündlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_VIERTELJAEHRLICH, 'Datenbereitstellung vierteljährlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_HALBJAEHRLICH, 'Datenbereitstellung halbjährlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_MONATLICH_ZUSAETZLICH, 'Datenbereitstellung monatlich zusätzlich'],
  [Dienstleistungstyp.DATENBEREITSTELLUNG_EINMALIG, 'Datenbereitstellung einmalig'],
  [Dienstleistungstyp.AUSLESUNG_2X_TAEGLICH_FERNAUSLESUNG, 'Auslesung 2x täglich mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_3X_TAEGLICH_FERNAUSLESUNG, 'Auslesung 3x täglich mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_TAEGLICH_FERNAUSLESUNG, 'Auslesung täglich mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_MANUELL_MSB, 'Auslesung, manuell vom Messstellenbetreiber vorgenommen'],
  [Dienstleistungstyp.AUSLESUNG_MONATLICH_FERNAUSLESUNG, 'Auslesung monatlich bei mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_JAEHRLICH_FERNAUSLESUNG, 'Auslesung jährlich bei SLP mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_MDE, 'Auslesung mit mobiler Daten Erfassung ,MDE)'],
  [Dienstleistungstyp.ABLESUNG_MONATLICH, 'Ablesung monatlich'],
  [Dienstleistungstyp.ABLESUNG_VIERTELJAEHRLICH, 'Ablesung vierteljährlich'],
  [Dienstleistungstyp.ABLESUNG_HALBJAEHRLICH, 'Ablesung halbjährlich'],
  [Dienstleistungstyp.ABLESUNG_JAEHRLICH, 'Ablesung jährlich'],
  [Dienstleistungstyp.AUSLESUNG_FERNAUSLESUNG, 'Auslesung mittels Fernauslesung'],
  [Dienstleistungstyp.ABLESUNG_ZUSAETZLICH_MSB, 'Ablesung, zusätzlich vom Messstellenbetreiber vorgenommen'],
  [Dienstleistungstyp.ABLESUNG_ZUSAETZLICH_KUNDE, 'Ablesung SLP, zusätzlich vom Kunden vorgenommen'],
  [Dienstleistungstyp.AUSLESUNG_FERNAUSLESUNG_ZUSAETZLICH_MSB,
    'Auslesung, mittels Fernauslesung, zusätzlich vom Messstellenbetreiber vorgenommen',
  ],
  [Dienstleistungstyp.AUSLESUNG_MOATLICH_FERNAUSLESUNG, 'Auslesung monatlich mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_STUENDLICH_FERNAUSLESUNG, 'Auslesung stündlich mittels Fernauslesung'],
  [Dienstleistungstyp.AUSLESUNG_TEMPERATURMENGENUMWERTER, 'Auslesung Temperaturmengenumwerter'],
  [Dienstleistungstyp.AUSLESUNG_ZUSTANDSMENGENUMWERTER, 'Auslesung Zustandsmengenumwerter'],
  [Dienstleistungstyp.AUSLESUNG_SYSTEMMENGENUMWERTER, 'Auslesung Systemmengenumwerter'],
  [Dienstleistungstyp.AUSLESUNG_VORGANG, 'Auslesung je Vorgang'],
  [Dienstleistungstyp.AUSLESUNG_KOMPAKTMENGENUMWERTER, 'Auslesung Kompaktmengenumwerter'],
  [Dienstleistungstyp.SPERRUNG, 'Sperrung einer Abnahmestelle'],
  [Dienstleistungstyp.ENTSPERRUNG, 'Entsperrung einer Abnahmestelle'],
  [Dienstleistungstyp.MAHNKOSTEN, 'Mahnkosten'],
  [Dienstleistungstyp.INKASSOKOSTEN, 'Inkassokosten'],
]);
