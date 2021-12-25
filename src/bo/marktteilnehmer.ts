import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Marktrolle} from 'enum/marktrolle.enum';
import {Rollencodetyp} from 'enum/rollencodetyp.enum';
import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {Adresse} from 'com/adresse';
import {Anrede} from 'enum/anrede.enum';
import {Kontaktart} from 'enum/kontaktart.enum';
import {Geschaeftspartnerrolle} from 'enum/geschaeftspartnerrolle.enum';

export interface IMarktteilnehmer extends IGeschaeftspartner {
  marktrolle: Marktrolle;
  rollencodenummer: string;
  rollencodetyp: Rollencodetyp;
  makoadresse: string;
}

/**
 * Objekt zur Kommunikation von Marktteilnehmern jeglicher Art.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Marktteilnehmer](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-marktteilnehmer)
 */
export class Marktteilnehmer extends Geschaeftsobjekt implements IMarktteilnehmer {
  /**
   * Constructor.
   *
   * @param {Marktrolle} marktrolle
   * @param {string} rollencodenummer
   * @param {Rollencodetyp} rollencodetyp
   * @param {Adresse} makoadresse
   * @param {string} name1
   * @param {string} partneradresse
   * @param {Anrede} anrede
   * @param {string} name2
   * @param {string} name3
   * @param {boolean} gewerbekennzeichnung
   * @param {string} hrnummer
   * @param {string} amtsgericht
   * @param {Array<Kontaktart>} kontaktweg
   * @param {string} umsatzsteuerId
   * @param {string} glaeubigerId
   * @param {string} eMailAdresse
   * @param {string} website
   * @param {Set<Geschaeftspartnerrolle>} geschaeftspartnerrolle
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public marktrolle: Marktrolle,
              public rollencodenummer: string,
              public rollencodetyp: Rollencodetyp,
              public makoadresse: string,
              public name1: string,
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
    super(BoTyp.MARKTTEILNEHMER, externeReferenzen);
  }
}
