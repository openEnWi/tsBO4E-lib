import {EnumLabels} from './util/enum-labels';

/**
 * Aufzählung der unterstützten Ausschreibungsportale.
 *
 * veröffentlicht am 28. Februar 2018
 *
 * @see [ENUM Ausschreibungsportal](https://www.bo4e.de/dokumentation/enumerations/enum-ausschreibungsportal)
 */
export enum Ausschreibungsportal {
    ENPORTAL = 'ENPORTAL',
    ENERGIE_AGENTUR = 'ENERGIE_AGENTUR',
    BMWI = 'BMWI',
    ENERGIE_HANDELSPLATZ = 'ENERGIE_HANDELSPLATZ',
    BUND = 'BUND',
    VEA_ONLINE = 'VEA_ONLINE',
    ISPEX = 'ISPEX',
    ENERGIEMARKTPLATZ = 'ENERGIEMARKTPLATZ',
    EVERGABE = 'EVERGABE',
    DTAD = 'DTAD',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Ausschreibungsportal}.
 */
export const AusschreibungsportalLabel: EnumLabels<Ausschreibungsportal> = EnumLabels.create([
  [Ausschreibungsportal.ENPORTAL, 'enPORTAL'],
  [Ausschreibungsportal.ENERGIE_AGENTUR, 'EnergieAgentur.NRW'],
  [Ausschreibungsportal.BMWI, 'BMWI-Ausschreibungen'],
  [Ausschreibungsportal.ENERGIE_HANDELSPLATZ, 'energie-handelsplatz.de'],
  [Ausschreibungsportal.BUND, 'BUND.DE'],
  [Ausschreibungsportal.VEA_ONLINE, 'vea-online.de'],
  [Ausschreibungsportal.ISPEX, 'ispex.de'],
  [Ausschreibungsportal.ENERGIEMARKTPLATZ, 'energirmarktplatz.de'],
  [Ausschreibungsportal.EVERGABE, 'evergabe.de'],
  [Ausschreibungsportal.DTAD, 'dtad.de'],
]);
