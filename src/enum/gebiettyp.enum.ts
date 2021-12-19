import {EnumLabels} from './util/enum-labels';

/**
 * Auflistung der möglichen Gebietstypen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Gebiettyp](https://www.bo4e.de/dokumentation/enumerations/enum-gebiettyp)
 */
export enum Gebiettyp {
    REGELZONE = 'REGELZONE',
    MARKTGEBIET = 'MARKTGEBIET',
    BILANZIERUNGSGEBIET = 'BILANZIERUNGSGEBIET',
    VERTEILNETZ = 'VERTEILNETZ',
    TRANSPORTNETZ = 'TRANSPORTNETZ',
    REGIONALNETZ = 'REGIONALNETZ',
    AREALNETZ = 'AREALNETZ',
    GRUNDVERSORGUNGSGEBIET = 'GRUNDVERSORGUNGSGEBIET',
    VERSORGUNGSGEBIET = 'VERSORGUNGSGEBIET',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Gebiettyp}.
 */
export const GebiettypLabel: EnumLabels<Gebiettyp> = EnumLabels.create([
  [Gebiettyp.REGELZONE, 'Regelzone'],
  [Gebiettyp.MARKTGEBIET, 'Marktgebiet'],
  [Gebiettyp.BILANZIERUNGSGEBIET, 'Bilanzierungsgebiet'],
  [Gebiettyp.VERTEILNETZ, 'Verteilnetz'],
  [Gebiettyp.TRANSPORTNETZ, 'Transportnetz'],
  [Gebiettyp.REGIONALNETZ, 'Regionalnetz'],
  [Gebiettyp.AREALNETZ, 'Arealnetz'],
  [Gebiettyp.GRUNDVERSORGUNGSGEBIET, 'Grundversorgungsgebiet'],
  [Gebiettyp.VERSORGUNGSGEBIET, 'Versorgungsgebiet'],
])
;
