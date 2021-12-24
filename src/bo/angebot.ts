import {Sparte} from 'enum/sparte.enum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {IAnsprechpartner} from 'bo/ansprechpartner';
import {Angebotsvariante} from 'com/angebotsvariante';
import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IAngebot extends IGeschaeftsobjekt {
  angebotsnummer: string;
  angebotsdatum: Date;
  angebotsgeber: IGeschaeftspartner;
  angebotsnehmer: IGeschaeftspartner;
  varianten: Set<Angebotsvariante>;
  sparte: Sparte;
  bindefrist?: Date;
  anfragereferenz?: string;
  unterzeichnerAngebotsnehmer?: IAnsprechpartner;
  unterzeichnerAngebotsgeber?: IAnsprechpartner;
}

/**
 * Mit diesem BO kann ein Versorgungsangebot zur Strom- oder Gasversorgung
 * oder die Teilnahme an einer Ausschreibung übertragen werden.
 * Es können verschiedene Varianten enthalten sein (z.B. ein- und mehrjährige Laufzeit).
 * Innerhalb jeder Variante können Teile enthalten sein,
 * die jeweils für eine oder mehrere Marktlokationen erstellt werden.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Angebot](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-angebot)
 */
export class Angebot extends Geschaeftsobjekt implements IAngebot {
  /**
   * Constructor.
   *
   * @param {string} angebotsnummer
   * @param {Date} angebotsdatum
   * @param {IGeschaeftspartner} angebotsgeber
   * @param {IGeschaeftspartner} angebotsnehmer
   * @param {Set<Angebotsvariante>} varianten
   * @param {Sparte} sparte
   * @param {Date} bindefrist
   * @param {string} anfragereferenz
   * @param {IAnsprechpartner} unterzeichnerAngebotsnehmer
   * @param {IAnsprechpartner} unterzeichnerAngebotsgeber
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public angebotsnummer: string,
              public angebotsdatum: Date,
              public angebotsgeber: IGeschaeftspartner,
              public angebotsnehmer: IGeschaeftspartner,
              public varianten: Set<Angebotsvariante>,
              public sparte: Sparte,
              public bindefrist?: Date,
              public anfragereferenz?: string,
              public unterzeichnerAngebotsnehmer?: IAnsprechpartner,
              public unterzeichnerAngebotsgeber?: IAnsprechpartner,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.ANGEBOT, externeReferenzen);
  }
}
