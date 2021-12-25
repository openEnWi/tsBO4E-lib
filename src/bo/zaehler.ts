import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Zaehlerauspraegung} from 'enum/zaehlerauspraegung.enum';
import {Zaehlertyp} from 'enum/zaehlertyp.enum';
import {Tarifart} from 'enum/tarifart.enum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Zaehlwerk} from 'com/zaehlwerk';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IZaehler extends IGeschaeftsobjekt {
  zaehlernummer: string;
  sparte: Sparte;
  zaehlerauspraegung: Zaehlerauspraegung;
  zaehlertyp: Zaehlertyp;
  tarifart: Tarifart;
  zaehlwerke: Array<Zaehlwerk>;
  zaehlerhersteller: IGeschaeftspartner;
  zaehlerkonstante?: number;
  eichungBis?: Date;
  letzteEichung?: Date;
}

/**
 * Mit diesem Geschäftsobjekt wird die Information zu einem Zähler abgebildet.
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Zaehler](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-zahler)
 */
export class Zaehler extends Geschaeftsobjekt implements IZaehler {
  /**
   * Constructor.
   *
   * @param {string} zaehlernummer
   * @param {Sparte} sparte
   * @param {Zaehlerauspraegung} zaehlerauspraegung
   * @param {Zaehlertyp} zaehlertyp
   * @param {Tarifart} tarifart
   * @param {Array<Zaehlwerk>} zaehlwerke
   * @param {IGeschaeftspartner} zaehlerhersteller
   * @param {number} zaehlerkonstante
   * @param {Date} eichungBis
   * @param {Date} letzteEichung
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public zaehlernummer: string,
              public sparte: Sparte,
              public zaehlerauspraegung: Zaehlerauspraegung,
              public zaehlertyp: Zaehlertyp,
              public tarifart: Tarifart,
              public zaehlwerke: Array<Zaehlwerk>,
              public zaehlerhersteller: IGeschaeftspartner,
              public zaehlerkonstante?: number,
              public eichungBis?: Date,
              public letzteEichung?: Date,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.ZAEHLER, externeReferenzen);
  }
}
