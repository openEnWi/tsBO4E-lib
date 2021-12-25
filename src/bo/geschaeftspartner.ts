import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Geschaeftspartnerrolle} from 'enum/geschaeftspartnerrolle.enum';
import {Anrede} from 'enum/anrede.enum';
import {Kontaktart} from 'enum/kontaktart.enum';
import {BoTyp} from 'enum/bo-typ.enum';
import {Adresse} from 'com/adresse';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IGeschaeftspartner extends IGeschaeftsobjekt {
  anrede?: Anrede;
  name1: string;
  name2?: string;
  name3?: string;
  gewerbekennzeichnung: boolean;
  hrnummer?: string;
  amtsgericht?: string;
  kontaktweg: Array<Kontaktart>;
  umsatzsteuerId?: string;
  glaeubigerId?: string;
  eMailAdresse?: string;
  website?: string;
  geschaeftspartnerrolle: Set<Geschaeftspartnerrolle>;
  partneradresse: Adresse;
}


/**
 * Mit diesem Objekt können Geschäftspartner übertragen werden.
 *
 * Sowohl Unternehmen, als auch Privatpersonen können Geschäftspartner sein.
 *
 * Hinweis: Marktteilnehmer haben ein eigenes BO, welches sich von diesem BO ableitet.
 * Hier sollte daher keine Zuordnung zu Marktrollen erfolgen.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Geschaeftspartner](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-geschaftspartner)
 */
export class Geschaeftspartner extends Geschaeftsobjekt implements IGeschaeftspartner {
  /**
   * Constructor.
   *
   * @param {string} name1
   * @param {Adresse} partneradresse
   * @param {Anrede} anrede
   * @param {string} name2
   * @param {string} name3
   * @param {boolean} gewerbekennzeichnung
   * @param {string} hrnummer
   * @param {string} amtsgericht
   * @param {Array<Kontaktart> } kontaktweg
   * @param {string} umsatzsteuerId
   * @param {string} glaeubigerId
   * @param {string} eMailAdresse
   * @param {string} website
   * @param {Set<Geschaeftspartnerrolle>} geschaeftspartnerrolle
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public name1: string,
              public partneradresse: Adresse,
              public anrede?: Anrede,
              public name2?: string,
              public name3?: string,
              public gewerbekennzeichnung: boolean = false,
              public hrnummer?: string,
              public amtsgericht?: string,
              public kontaktweg: Array<Kontaktart> = [],
              public umsatzsteuerId?: string,
              public glaeubigerId?: string,
              public eMailAdresse?: string,
              public website?: string,
              public geschaeftspartnerrolle: Set<Geschaeftspartnerrolle> = new Set<Geschaeftspartnerrolle>(),
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.GESCHAEFTSPARTNER, externeReferenzen);
  }
}
