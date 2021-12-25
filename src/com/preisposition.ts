/**
 * Preis für eine definierte Lieferung oder Leistung innerhalb eines Preisblattes
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Preisposition](https://www.bo4e.de/dokumentation/komponenten/com-preisposition)
 */
import {Kalkulationsmethode} from 'enum/kalkulationsmethode.enum';
import {Leistungstyp} from 'enum/leistungstyp.enum';
import {Waehrungseinheit} from 'enum/waehrungseinheit.enum';
import {Mengeneinheit} from 'enum/mengeneinheit.enum';
import {Zeiteinheit} from 'enum/zeiteinheit.enum';
import {Tarifzeit} from 'enum/tarifzeit.enum';
import {BdewArtikelnummer} from 'enum/bdew-artikelnummer.enum';
import {Bemessungsgroesse} from 'enum/bemessungsgroesse.enum';
import {Preisstaffel} from 'com/preisstaffel';

/**
 * Preis für eine definierte Lieferung oder Leistung innerhalb eines Preisblattes
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [COM Preisposition](https://www.bo4e.de/dokumentation/komponenten/com-preisposition)
 */
export class Preisposition {
  /**
   * Constructor.
   *
   * @param {Kalkulationsmethode} berechnungsmethode
   * @param {Leistungstyp} leistungstyp
   * @param {string} leistungsbezeichung
   * @param {Waehrungseinheit} preiseinheit
   * @param {Mengeneinheit} bezugsgroesse
   * @param {Set<Preisstaffel>} preisstaffeln
   * @param {Zeiteinheit} zeitbasis
   * @param {Tarifzeit} tarifzeit
   * @param {BdewArtikelnummer} bdewArtikelnummer
   * @param {Bemessungsgroesse} zonungsgroesse
   * @param {number} freimengeBlindarbeit
   * @param {number} freimengeLeistungsfaktor
   */
  constructor(public berechnungsmethode: Kalkulationsmethode,
              public leistungstyp: Leistungstyp,
              public leistungsbezeichung: string,
              public preiseinheit: Waehrungseinheit,
              public bezugsgroesse: Mengeneinheit,
              public preisstaffeln: Set<Preisstaffel>,
              public zeitbasis?: Zeiteinheit,
              public tarifzeit?: Tarifzeit,
              public bdewArtikelnummer?: BdewArtikelnummer,
              public zonungsgroesse?: Bemessungsgroesse,
              public freimengeBlindarbeit?: number,
              public freimengeLeistungsfaktor?: number) {
  }
}
