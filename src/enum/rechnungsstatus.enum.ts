import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung verschiedener Zustände, die im Rahmen der Rechnungsbearbeitung durchlaufen werden.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [ENUM Rechnungsstatus](https://www.bo4e.de/dokumentation/enumerations/enum-rechnungsstatus)
 */
export enum Rechnungsstatus {
    UNGEPRUEFT = 'UNGEPRUEFT',
    GEPRUEFT_OK = 'GEPRUEFT_OK',
    GEPRUEFT_FEHLERHAFT = 'GEPRUEFT_FEHLERHAFT',
    GEBUCHT = 'GEBUCHT',
    BEZAHLT = 'BEZAHLT',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Rechnungsstatus}.
 */
export const RechnungsstatusLabel: EnumLabels<Rechnungsstatus> = EnumLabels.of([
  [Rechnungsstatus.UNGEPRUEFT, 'Eine Rechnung vom Lieferanten an einen Endkunden über die Lieferung von Energie.'],
  [
    Rechnungsstatus.GEPRUEFT_OK,
    'Eine Rechnung vom Netzbetreiber an den Netznutzer. (i.d.R. der Lieferant) über die Netznutzung.',
  ],
  [
    Rechnungsstatus.GEPRUEFT_FEHLERHAFT,
    // eslint-disable-next-line max-len
    'Eine Rechnung vom Netzbetreiber an den Netznutzer (i.d.R. der Lieferant) zur Abrechnung von Mengen-Differenzen zwischen Bilanzierung und Messung.',
  ],
  [Rechnungsstatus.GEBUCHT, 'Rechnung eines Messstellenbetreibers an den Messkunden.'],
  [Rechnungsstatus.BEZAHLT, 'Rechnungen zwischen einem Händler und Einkäufer von Energie.'],
]);
