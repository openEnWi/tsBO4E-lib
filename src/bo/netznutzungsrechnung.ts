import {IRechnung} from 'bo/rechnung';
import {Sparte} from 'enum/sparte.enum';
import {NnRechnungsart} from 'enum/nn-rechnungsart.enum';
import {NnRechnungstyp} from 'enum/nn-rechnungstyp.enum';
import {Geschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {Rechnungstyp} from 'enum/rechnungstyp.enum';
import {Zeitraum} from 'com/zeitraum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Betrag} from 'com/betrag';
import {Steuerbetrag} from 'com/steuerbetrag';
import {Rechnungsposition} from 'com/rechnungsposition';
import {Rechnungsstatus} from 'enum/rechnungsstatus.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface INetznutzungsrechnung extends IRechnung {
  sparte: Sparte;
  absendercodenummer: string;
  empfaengercodenummer: string;
  nnrechnungsart: NnRechnungsart;
  nnrechnungstyp: NnRechnungstyp;
  original: boolean;
  simuliert: boolean;
  lokationsId?: string;
}

/**
 * veröffentlicht am 06. Juni 2018
 *
 * @see [BO Netznutzungsrechnung](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-netznutzungsrechnung)
 */
export class Netznutzungsrechnung extends Geschaeftsobjekt implements INetznutzungsrechnung {
  /**
   * Constructor.
   *
   * @param {sparte} sparte
   * @param {string} absendercodenummer
   * @param {string} empfaengercodenummer
   * @param {NnRechnungsart} nnrechnungsart
   * @param {NnRechnungstyp} nnrechnungstyp
   * @param {boolean} original
   * @param {boolean} simuliert
   * @param {boolean} storno
   * @param {string} rechnungsnummer
   * @param {Date} rechnungsdatum
   * @param {Date} faelligkeitsdatum
   * @param {Rechnungstyp} rechnungsstyp
   * @param {Zeitraum} rechnungsperiode
   * @param {IGeschaeftspartner} rechnungsersteller
   * @param {IGeschaeftspartner} rechnungsempfaenger
   * @param {Betrag} gesamtnetto
   * @param {Betrag} gesamtsteuer
   * @param {Betrag} gesamtbrutto
   * @param {Betrag} zuzahlen
   * @param {Set<Steuerbetrag>} steuerbetraege
   * @param {Array<Rechnungsposition>} rechnungspositionen
   * @param {string} originalRechnungsnummer
   * @param {string} rechnungstitel
   * @param {Rechnungsstatus} rechnungsstatus
   * @param {Betrag} vorausgezahlt
   * @param {Betrag} rabattBrutto
   * @param {string} lokationsId
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public sparte: Sparte,
              public absendercodenummer: string,
              public empfaengercodenummer: string,
              public nnrechnungsart: NnRechnungsart,
              public nnrechnungstyp: NnRechnungstyp,
              public original: boolean,
              public simuliert: boolean,
              public storno: boolean,
              public rechnungsnummer: string,
              public rechnungsdatum: Date,
              public faelligkeitsdatum: Date,
              public rechnungsstyp: Rechnungstyp,
              public rechnungsperiode: Zeitraum,
              public rechnungsersteller: IGeschaeftspartner,
              public rechnungsempfaenger: IGeschaeftspartner,
              public gesamtnetto: Betrag,
              public gesamtsteuer: Betrag,
              public gesamtbrutto: Betrag,
              public zuzahlen: Betrag,
              public steuerbetraege: Set<Steuerbetrag>,
              public rechnungspositionen: Array<Rechnungsposition>,
              public originalRechnungsnummer?: string,
              public rechnungstitel?: string,
              public rechnungsstatus?: Rechnungsstatus,
              public vorausgezahlt?: Betrag,
              public rabattBrutto?: Betrag,
              public lokationsId?: string,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.NETZNUTZUNGSRECHNUNG, externeReferenzen);
  }
}
