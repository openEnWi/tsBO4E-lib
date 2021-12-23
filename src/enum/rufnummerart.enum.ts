import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung verschiedener Rufnummerntypen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Rufnummernart](https://www.bo4e.de/dokumentation/enumerations/enum-rufnummernart)
 */
export enum Rufnummernart {
    RUF_ZENTRALE = 'RUF_ZENTRALE',
    FAX_ZENTRALE = 'FAX_ZENTRALE',
    SAMMELRUF = 'SAMMELRUF',
    SAMMELFAX = 'SAMMELFAX',
    ABTEILUNGRUF = 'ABTEILUNGRUF',
    ABTEILUNGFAX = 'ABTEILUNGFAX',
    RUF_DURCHWAHL = 'RUF_DURCHWAHL',
    FAX_DURCHWAHL = 'FAX_DURCHWAHL',
    MOBIL_NUMMER = 'MOBIL_NUMMER',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Rufnummernart}.
 */
export const RufnummernartLabel: EnumLabels<Rufnummernart> = EnumLabels.of([
  [Rufnummernart.RUF_ZENTRALE, 'Rufnummer Zentrale'],
  [Rufnummernart.FAX_ZENTRALE, 'Faxnummer Zentrale'],
  [Rufnummernart.SAMMELRUF, 'Sammelrufnummer'],
  [Rufnummernart.SAMMELFAX, 'Sammelfaxnummer'],
  [Rufnummernart.ABTEILUNGRUF, 'Rufnummer Abteilung'],
  [Rufnummernart.ABTEILUNGFAX, 'Faxnummer Abteilung'],
  [Rufnummernart.RUF_DURCHWAHL, 'Rufnummer Durchwahl'],
  [Rufnummernart.FAX_DURCHWAHL, 'Faxnummer Durchwahl'],
  [Rufnummernart.MOBIL_NUMMER, 'Nummer des mobilen Telefons'],
]);
