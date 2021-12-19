import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung der Typen von Endkunden. Daraus kann das Verbrauchsprofil abgeleitet werden.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Kundentyp](https://www.bo4e.de/dokumentation/enumerations/enum-kundentyp)
 */
export enum Kundentyp {
    GEWERBE = 'GEWERBE',
    PRIVAT = 'PRIVAT',
    LANDWIRT = 'LANDWIRT',
    SONSTIGE = 'SONSTIGE',
    HAUSHALT = 'HAUSHALT',
    DIREKTHEIZUNG = 'DIREKTHEIZUNG',
    GEMEINSCHAFT_MFH = 'GEMEINSCHAFT_MFH',
    KIRCHE = 'KIRCHE',
    KWK = 'KWK',
    LADESAEULE = 'LADESAEULE',
    BELEUCHTUNG_OEFFENTLICH = 'BELEUCHTUNG_OEFFENTLICH',
    BELEUCHTUNG_STRASSE = 'BELEUCHTUNG_STRASSE',
    SPEICHERHEIZUNG = 'SPEICHERHEIZUNG',
    UNTERBR_EINRICHTUNG = 'UNTERBR_EINRICHTUNG',
    WAERMEPUMPE = 'WAERMEPUMPE',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Kundentyp}.
 */
export const KundentypLabel: EnumLabels<Kundentyp> = EnumLabels.of([
  [Kundentyp.GEWERBE, 'Gewerbekunden'],
  [Kundentyp.PRIVAT, 'Privatkunden'],
  [Kundentyp.LANDWIRT, 'Landwirte'],
  [Kundentyp.SONSTIGE, 'Sonstige Endkunden'],
  [Kundentyp.HAUSHALT, 'Haushaltskunden'],
  [Kundentyp.DIREKTHEIZUNG, 'Direktheizungen'],
  [Kundentyp.GEMEINSCHAFT_MFH, 'Gemeinschaftseinrichtungen von MFH'],
  [Kundentyp.KIRCHE, 'Kirchen und caritative Einrichtungen'],
  [Kundentyp.KWK, 'KWK-Anlagen'],
  [Kundentyp.LADESAEULE, 'Ladesäulen'],
  [Kundentyp.BELEUCHTUNG_OEFFENTLICH, 'Öffentliche Beleuchtungen'],
  [Kundentyp.BELEUCHTUNG_STRASSE, 'Straßenbeleuchtungen'],
  [Kundentyp.SPEICHERHEIZUNG, 'Speicherheizungen'],
  [Kundentyp.UNTERBR_EINRICHTUNG, 'Unterbrechbare Verbrauchseinrichtungen'],
  [Kundentyp.WAERMEPUMPE, 'Wärmepumpen'],
]);
