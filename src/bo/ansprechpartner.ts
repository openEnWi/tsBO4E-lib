import {Anrede} from 'enum/anrede.enum';
import {Titel} from 'enum/titel.enum';
import {Geschaeftspartner, IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Adresse} from 'com/adresse';
import {Rufnummer} from 'com/rufnummer';
import {Zustaendigkeit} from 'com/zustaendigkeit';
import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IAnsprechpartner extends IGeschaeftsobjekt {
  geschaeftspartner: IGeschaeftspartner;
  anrede?: Anrede;
  individuelleAnrede?: string;
  titel?: Titel;
  vorname?: string;
  nachname?: string;
  eMailAdresse?: string;
  kommentar?: string;
  adresse?: Adresse;
  rufnummer?: Rufnummer;
  zustaendigkeit?: Zustaendigkeit;
}

/**
 * Modellierung eines Ansprechpartners für einen bestimmten Geschäftspartner.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Ansprechpartner](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-ansprechpartner)
 */
export class Ansprechpartner extends Geschaeftsobjekt implements IAnsprechpartner {
  /**
   * Constructor.
   *
   * @param {IGeschaeftspartner} geschaeftspartner
   * @param {Anrede} anrede
   * @param {string} individuelleAnrede
   * @param {Titel} titel
   * @param {string} vorname
   * @param {string} nachname
   * @param {string} eMailAdresse
   * @param {string} kommentar
   * @param {Adresse} adresse
   * @param {Rufnummer} rufnummer
   * @param {Zustaendigkeit} zustaendigkeit
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public geschaeftspartner: Geschaeftspartner,
              public anrede?: Anrede,
              public individuelleAnrede?: string,
              public titel?: Titel,
              public vorname?: string,
              public nachname?: string,
              public eMailAdresse?: string,
              public kommentar?: string,
              public adresse?: Adresse,
              public rufnummer?: Rufnummer,
              public zustaendigkeit?: Zustaendigkeit,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.ANSPRECHPARTNER, externeReferenzen);
  }
}
