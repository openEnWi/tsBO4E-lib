import {EnumLabels} from './util/enum-labels';

/**
 * Art des Kontaktes zwischen Geschäftspartnern.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Kontaktart](https://www.bo4e.de/dokumentation/enumerations/enum-kontaktart)
 */
export enum Kontaktart {
    ANSCHREIBEN = 'ANSCHREIBEN',
    TELEFONAT = 'TELEFONAT',
    FAX = 'FAX',
    E_MAIL = 'E_MAIL',
    SMS = 'SMS',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Kontaktart}.
 */
export const KontaktartLabel: EnumLabels<Kontaktart> = EnumLabels.of([
  [Kontaktart.ANSCHREIBEN, 'Anchreiben'],
  [Kontaktart.TELEFONAT, 'Telefonat'],
  [Kontaktart.FAX, 'Fax'],
  [Kontaktart.E_MAIL, 'E-Mail'],
  [Kontaktart.SMS, 'SMS'],
]);
