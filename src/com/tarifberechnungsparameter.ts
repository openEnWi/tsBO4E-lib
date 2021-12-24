import {Tarifkalkulationsmethode} from 'enum/tarifkalkulationsmethode.enum';
import {Messpreistyp} from 'enum/messpreistyp.enum';
import {Preis} from 'com/preis';
import {Tarifpreis} from 'com/tarifpreis';

/**
 * Abbildung eines Tagesvektors eines beliebigen äquidistanten Zeitrasters.
 *
 * veröffentlicht am 07. Oktober 2020
 *
 * @see [COM Tagesvektor](https://www.bo4e.de/dokumentation/komponenten/com-tagesvektor)
 */
export class Tarifberechnungsparameter {
  /**
   * Constructor.
   *
   * @param {Tarifpreis} zusatzpreise
   * @param {Tarifkalkulationsmethode} berechnungsmethode
   * @param {boolean} messpreisInGPEnthalten
   * @param {Messpreistyp} messpreistyp
   * @param {number} kwInklusive
   * @param {number} kwWeitereMengen
   * @param {boolean} messpreisBeruecksichtigen
   * @param {Preis} hoechstpreisNT
   * @param {Preis} hoechstpreisHT
   * @param {Preis} mindestpreis
   */
  constructor(
    public zusatzpreise: Set<Tarifpreis>,
    public berechnungsmethode?: Tarifkalkulationsmethode,
    // @ts-ignore
    public messpreisInGPEnthalten: boolean,
    public messpreistyp?: Messpreistyp,
    public kwInklusive?: number,
    public kwWeitereMengen?: number,
    public messpreisBeruecksichtigen?: boolean,
    public hoechstpreisNT?: Preis,
    public hoechstpreisHT?: Preis,
    public mindestpreis?: Preis,
  ) {
  }
}
