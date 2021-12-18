/**
 * Gibt den Status eines Angebotes an.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Angebotsstatus](https://www.bo4e.de/dokumentation/enumerations/enum-angebotsstatus)
 */
import {EnumLabels} from './enum-labels';

export enum Angebotsstatus {
    KONZEPTION = 'KONZEPTION',
    UNVERBINDLICH = 'UNVERBINDLICH',
    VERBINDLICH = 'VERBINDLICH',
    BEAUFTRAGT = 'BEAUFTRAGT',
    UNGUELTIG = 'UNGUELTIG',
    ABGELEHNT = 'ABGELEHNT',
    NACHGEFASST = 'NACHGEFASST',
    AUSSTEHEND = 'AUSSTEHEND',
    ERLEDIGT = 'ERLEDIGT'
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link Angebotsstatus}.
 */
export const AngebotsstatusLabel: EnumLabels<Angebotsstatus> = EnumLabels.create([
    [Angebotsstatus.KONZEPTION, 'Konzeption'],
    [Angebotsstatus.UNVERBINDLICH, 'unverbindlich'],
    [Angebotsstatus.VERBINDLICH, 'verbindlich'],
    [Angebotsstatus.BEAUFTRAGT, 'beauftragt'],
    [Angebotsstatus.UNGUELTIG, 'ungültig'],
    [Angebotsstatus.ABGELEHNT, 'abgelehnt'],
    [Angebotsstatus.NACHGEFASST, 'nachgefasst'],
    [Angebotsstatus.AUSSTEHEND, 'ausstehend'],
    [Angebotsstatus.ERLEDIGT, 'erledigt'],
]);
