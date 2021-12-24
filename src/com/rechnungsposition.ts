import {Preis} from 'com/preis';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {BdewArtikelnummer} from 'enum/bdew-artikelnummer.enum';
import {Menge} from 'com/menge';
import {Betrag} from 'com/betrag';
import {Steuerbetrag} from 'com/steuerbetrag';

/**
 * Abbildung einer Rechnungsposition.
 * Über Rechnungspositionen werden Rechnungen strukturiert.
 * In einem Rechnungsteil wird jeweils eine in sich geschlossene Leistung abgerechnet.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [COM Rechnungsposition](https://www.bo4e.de/dokumentation/komponenten/com-rechnungsposition)
 */
export class Rechnungsposition {
  /**
   * Constructor.
   *
   * @param {number} positionsnummer
   * @param {Date} lieferungVon
   * @param {Date} lieferungBis
   * @param {string} positionstext
   * @param {Preis} einzelpreis
   * @param {Steuerbetrag} teilsummeSteuer
   * @param {Mengeneinheit} zeiteinheit
   * @param {BdewArtikelnummer} artikelnummer
   * @param {string} lokationsId
   * @param {Menge} positionsMenge
   * @param {Menge} zeitbezogeneMenge
   * @param {Betrag} teilsummeNetto
   * @param {Betrag} teilrabattNetto
   */
  constructor(public positionsnummer: number,
              public lieferungVon: Date,
              public lieferungBis: Date,
              public positionstext: string,
              public einzelpreis: Preis,
              public teilsummeSteuer: Steuerbetrag,
              public zeiteinheit?: Mengeneinheit,
              public artikelnummer?: BdewArtikelnummer,
              public lokationsId?: string,
              public positionsMenge?: Menge,
              public zeitbezogeneMenge?: Menge,
              public teilsummeNetto?: Betrag,
              public teilrabattNetto?: Betrag,
  ) {
  }
}
