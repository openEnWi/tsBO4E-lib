import {EnumLabels} from './util/enum-labels';

/**
 * Diese Rollen kann ein Marktteilnehmer einnehmen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [ENUM Marktrolle](https://www.bo4e.de/dokumentation/enumerations/enum-marktrolle)
 */
export enum Marktrolle {
    NB = 'NB',
    LF = 'LF',
    MSB = 'MSB',
    MDL = 'MDL',
    DL = 'DL',
    BKV = 'BKV',
    BKO = 'BKO',
    UENB = 'UENB',
    KUNDE_SELBST_NN = 'KUNDE_SELBST_NN',
    MGV = 'MGV',
    EIV = 'EIV',
    RB = 'RB',
    KUNDE = 'KUNDE',
    INTERESSENT = 'INTERESSENT',
}

/**
 * Liefert kurze textuelle Repräsentationen der {@link Marktrolle}.
 */
export const MarktrolleLabel: EnumLabels<Marktrolle> = EnumLabels.of([
  [Marktrolle.NB, 'Netzbetreiber'],
  [Marktrolle.LF, 'Lieferant'],
  [Marktrolle.MSB, 'Messstellenbetreiber'],
  [Marktrolle.MDL, 'Messdienstleister'],
  [Marktrolle.DL, 'Dienstleister'],
  [Marktrolle.BKV, 'Bilanzkreisverantwortlicher'],
  [Marktrolle.BKO, 'Bilanzkoordinator/Marktgebietsverantwortlicher'],
  [Marktrolle.UENB, 'Übertragungsnetzbetreiber'],
  [Marktrolle.KUNDE_SELBST_NN, 'Kunden die NN-Entgelte selbst zahlen'],
  [Marktrolle.MGV, 'Marktgebietsverantwortlicher'],
  [Marktrolle.EIV, 'Einsatzverantwortlicher'],
  [Marktrolle.RB, 'Registerbetreiber'], // Beispielsweise Herkunftsnachweisregister
  [Marktrolle.KUNDE, 'Kunde'],
  [Marktrolle.INTERESSENT, 'Interessent'],
]);
