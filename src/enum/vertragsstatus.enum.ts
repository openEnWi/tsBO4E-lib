import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung einer Statusinformation für Verträge.
 *
 * veröffentlicht am 05. September 2018
 *
 * @see [ENUM Vertragsstatus](https://www.bo4e.de/dokumentation/enumerations/enum-vertragsstatus)
 */
export enum Vertragsstatus {
    IN_ARBEIT = 'IN_ARBEIT',
    UEBERMITTELT = 'UEBERMITTELT',
    ANGENOMMEN = 'ANGENOMMEN',
    AKTIV = 'AKTIV',
    ABGELEHNT = 'ABGELEHNT',
    WIDERRUFEN = 'WIDERRUFEN',
    STORNIERT = 'STORNIERT',
    GEKUENDIGT = 'GEKUENDIGT',
    BEENDET = 'BEENDET',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Vertragsstatus}.
 */
export const VertragsstatusLabel: EnumLabels<Vertragsstatus> = EnumLabels.of([
  [Vertragsstatus.IN_ARBEIT, 'in Arbeit'],
  [Vertragsstatus.UEBERMITTELT, 'übermittelt'],
  [Vertragsstatus.ANGENOMMEN, 'angenommen'],
  [Vertragsstatus.AKTIV, 'aktiv'],
  [Vertragsstatus.ABGELEHNT, 'abgelehnt'],
  [Vertragsstatus.WIDERRUFEN, 'widerrufen'],
  [Vertragsstatus.STORNIERT, 'storniert'],
  [Vertragsstatus.GEKUENDIGT, 'gekündigt'],
  [Vertragsstatus.BEENDET, 'beendet'],
]);
