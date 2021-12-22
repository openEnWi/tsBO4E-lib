import {EnumLabels} from './util/enum-labels';

/**
 * Der Status eines Zählerstandes
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [ENUM Messwertstatus](https://www.bo4e.de/dokumentation/enumerations/enum-messwertstatus)
 */
export enum Messwertstatus {
    ABGELESEN = 'ABGELESEN',
    ERSATZWERT = 'ERSATZWERT',
    VORSCHLAGSWERT = 'VORSCHLAGSWERT',
    NICHT_VERWENDBAR = 'NICHT_VERWENDBAR',
    PROGNOSEWERT = 'PROGNOSEWERT',
    VOLAEUFIGERWERT = 'VOLAEUFIGERWERT',
    ENERGIEMENGESUMMIERT = 'ENERGIEMENGESUMMIERT',
    FEHLT = 'FEHLT',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Messwertstatus}.
 */
export const MesswertstatusLabel: EnumLabels<Messwertstatus> = EnumLabels.of([
  [Messwertstatus.ABGELESEN, 'Abgelesener Wert (abrechnungsrelevant)'],
  [Messwertstatus.ERSATZWERT, 'Ersatzwert - geschätzt, veranschlagt (abrechnungsrelevant)'],
  [Messwertstatus.VORSCHLAGSWERT, 'Vorschlagswert (nicht abrechnungsrelevant)'],
  [Messwertstatus.NICHT_VERWENDBAR, 'Nicht verwendbarer Wert (nicht abrechnungsrelevant)'],
  [Messwertstatus.PROGNOSEWERT, 'Ein prognostizierter Wert'],
  [Messwertstatus.VOLAEUFIGERWERT, 'Ein vorläufiger Wert, dieser kann später angepasst werden.'],
  [Messwertstatus.ENERGIEMENGESUMMIERT, 'Summenwert, Bilanzsumme'],
  [Messwertstatus.FEHLT, 'Explizite Kennzeichnung eines fehlenden Wertes'],
]);
