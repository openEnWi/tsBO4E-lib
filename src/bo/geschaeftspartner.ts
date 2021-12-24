import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Geschaeftspartnerrolle} from 'enum/geschaeftspartnerrolle.enum';
import {Anrede} from 'enum/anrede.enum';
import {Kontaktart} from 'enum/kontaktart.enum';
import {BoTyp} from 'enum/bo-typ.enum';
import {Adresse} from 'com/adresse';


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
export interface IGschaeftspartner extends IGeschaeftsobjekt {
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

/** @inheritDoc */
export class Geschaeftspartner extends Geschaeftsobjekt implements IGschaeftspartner {
  boTyp: BoTyp = BoTyp.GESCHAEFTSPARTNER;

  anrede?: Anrede;
  name1!: string;
  name2?: string;
  name3?: string;
  gewerbekennzeichnung: boolean = false;
  hrnummer?: string;
  amtsgericht?: string;
  kontaktweg: Array<Kontaktart> = [];
  umsatzsteuerId?: string;
  glaeubigerId?: string;
  eMailAdresse?: string;
  website?: string;
  geschaeftspartnerrolle: Set<Geschaeftspartnerrolle> = new Set<Geschaeftspartnerrolle>();
  partneradresse!: Adresse;
}
