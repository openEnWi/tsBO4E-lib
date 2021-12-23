import {EnumLabels} from './util/enum-labels';

/**
 * Aulistung der verschiedenen Berechnungsmethoden für ein Preisblatt.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Tarifkalkulationsmethode](https://www.bo4e.de/dokumentation/enumerations/enum-tarifkalkulationsmethode)
 */
export enum Tarifkalkulationsmethode {
    KEINE = 'KEINE',
    STAFFELN = 'STAFFELN',
    ZONEN = 'ZONEN',
    BESTABRECHNUNG_STAFFEL = 'BESTABRECHNUNG_STAFFEL',
    PAKETPREIS = 'PAKETPREIS',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Tarifkalkulationsmethode}.
 */
export const TarifkalkulationsmethodeLabel: EnumLabels<Tarifkalkulationsmethode> = EnumLabels.of([
  [
    Tarifkalkulationsmethode.KEINE,
    'Es wird keine Berechnung durchgeführt, sondern lediglich die Menge mit dem Preis multipliziert.',
  ],
  [
    Tarifkalkulationsmethode.STAFFELN,
    // eslint-disable-next-line max-len
    'Staffelmodell, d.h. die Gesamtmenge wird in eine Staffel eingeordnet und für die gesamte Menge gilt der so ermittelte Preis',
  ],
  [
    Tarifkalkulationsmethode.ZONEN,
    // eslint-disable-next-line max-len
    'Zonenmodell, d.h. die Gesamtmenge wird auf die Zonen aufgeteilt und für die Teilmengen gilt der jeweilige Preis der Zone.',
  ],
  [Tarifkalkulationsmethode.BESTABRECHNUNG_STAFFEL, 'Bestabrechnung innerhalb der Staffelung'],
  [Tarifkalkulationsmethode.PAKETPREIS, 'Preis für ein Paket (eine Menge).'],
]);
