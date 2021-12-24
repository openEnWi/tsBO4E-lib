import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Ausschreibungstyp} from 'enum/ausschreibungstyp.enum';
import {Ausschreibungsstatus} from 'enum/ausschreibungsstatus.enum';
import {Ausschreibungsportal} from 'enum/ausschreibungsportal.enum';
import {Geschaeftspartner} from 'bo/geschaeftspartner';
import {Zeitraum} from 'com/zeitraum';
import {Ausschreibungslos} from 'com/ausschreibungslos';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IAusschreibung extends IGeschaeftsobjekt {
  ausschreibungsnummer: string;
  ausschreibungstyp: Ausschreibungstyp;
  ausschreibungsstatus: Ausschreibungsstatus;
  kostenpflichtig: boolean;
  veroeffentlichungszeitpunkt: Date;
  ausschreibender: Geschaeftspartner;
  abgabefrist: Zeitraum;
  bindefrist: Zeitraum;
  lose: Set<Ausschreibungslos>;
  ausschreibungportal?: Ausschreibungsportal;
  webseite?: string;
}

/**
 * Das BO Ausschreibung dient zur detaillierten Darstellung
 * von ausgeschriebenen Energiemengen in der Energiewirtschaft.
 *
 * veröffentlicht am 27. Juni 2018
 *
 * @see [BO Ausschreibung](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-ausschreibung)
 */
export class Ausschreibung extends Geschaeftsobjekt implements IAusschreibung {
  /**
   * Constructor.
   *
   * @param {string} ausschreibungsnummer
   * @param {Ausschreibungstyp} ausschreibungstyp
   * @param {Ausschreibungsstatus} ausschreibungsstatus
   * @param {boolean} kostenpflichtig
   * @param {Date} veroeffentlichungszeitpunkt
   * @param {Geschaeftspartner} ausschreibender
   * @param {Zeitraum} abgabefrist
   * @param {Zeitraum} bindefrist
   * @param {Set<Ausschreibungslos>} lose
   * @param {Ausschreibungsportal} ausschreibungportal
   * @param {string} webseite
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public ausschreibungsnummer: string,
              public ausschreibungstyp: Ausschreibungstyp,
              public ausschreibungsstatus: Ausschreibungsstatus,
              public kostenpflichtig: boolean,
              public veroeffentlichungszeitpunkt: Date,
              public ausschreibender: Geschaeftspartner,
              public abgabefrist: Zeitraum,
              public bindefrist: Zeitraum,
              public lose: Set<Ausschreibungslos>,
              public ausschreibungportal?: Ausschreibungsportal,
              public webseite?: string,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.AUSSCHREIBUNG, externeReferenzen);
  }
}
