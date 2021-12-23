import {EnumLabels} from './util/enum-labels';

/**
 * Abbildung verschiedener Rechnungstypen zur Kennzeichnung von Rechnungen
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [ENUM Rechnungstyp](https://www.bo4e.de/dokumentation/enumerations/enum-rechnungstyp)
 */
export enum Rechnungstyp {
    ENDKUNDENRECHNUNG = 'ENDKUNDENRECHNUNG',
    NETZNUTZUNGSRECHNUNG = 'NETZNUTZUNGSRECHNUNG',
    MEHRMINDERMENGENRECHNUNG = 'MEHRMINDERMENGENRECHNUNG',
    MESSSTELLENBETRIEBSRECHNUNG = 'MESSSTELLENBETRIEBSRECHNUNG',
    BESCHAFFUNGSRECHNUNG = 'BESCHAFFUNGSRECHNUNG',
    AUSGLEICHSENERGIERECHNUNG = 'AUSGLEICHSENERGIERECHNUNG',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Rechnungstyp}.
 */
export const RechnungstypLabel: EnumLabels<Rechnungstyp> = EnumLabels.of([
  [Rechnungstyp.ENDKUNDENRECHNUNG, 'Eine Rechnung vom Lieferanten an einen Endkunden über die Lieferung von Energie.'],
  [
    Rechnungstyp.NETZNUTZUNGSRECHNUNG,
    'Eine Rechnung vom Netzbetreiber an den Netznutzer. (i.d.R. der Lieferant) über die Netznutzung.',
  ],
  [
    Rechnungstyp.MEHRMINDERMENGENRECHNUNG,
    // eslint-disable-next-line max-len
    'Eine Rechnung vom Netzbetreiber an den Netznutzer. (i.d.R. der Lieferant) zur Abrechnung von Mengen-Differenzen zwischen Bilanzierung und Messung.',
  ],
  [Rechnungstyp.MESSSTELLENBETRIEBSRECHNUNG, 'Rechnung eines Messstellenbetreibers an den Messkunden.'],
  [Rechnungstyp.BESCHAFFUNGSRECHNUNG, 'Rechnungen zwischen einem Händler und Einkäufer von Energie.'],
  [Rechnungstyp.AUSGLEICHSENERGIERECHNUNG, 'Rechnung an den Verursacher von Ausgleichsenergie.'],
]);
