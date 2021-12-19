import {EnumLabels} from './util/enum-labels';

/**
 * Diese Rollen kann ein Geschäftspartner einnehmen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Geschaeftspartnerrolle](https://www.bo4e.de/dokumentation/enumerations/enum-geschaftspartnerrolle)
 */
export enum Geschaeftspartnerrolle {
    LIEFERANT = 'LIEFERANT',
    DIENSTLEISTER = 'DIENSTLEISTER',
    KUNDE = 'KUNDE',
    INTERESSENT = 'INTERESSENT',
    MARKTPARTNER = 'MARKTPARTNER',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Geschaeftspartnerrolle}.
 */
export const GeschaeftspartnerrolleLabel: EnumLabels<Geschaeftspartnerrolle> = EnumLabels.of([
  [Geschaeftspartnerrolle.LIEFERANT, 'Lieferant'],
  [Geschaeftspartnerrolle.DIENSTLEISTER, 'Dienstleister'],
  [Geschaeftspartnerrolle.KUNDE, 'Kunde'],
  [Geschaeftspartnerrolle.INTERESSENT, 'Interessent'],
  [Geschaeftspartnerrolle.MARKTPARTNER, 'Marktpartner'],
]);
