import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Rechnungsstatus} from 'enum/rechnungsstatus.enum';
import {Rechnungstyp} from 'enum/rechnungstyp.enum';
import {Zeitraum} from 'com/zeitraum';
import {IGeschaeftspartner} from 'bo/geschaeftspartner';
import {Betrag} from 'com/betrag';
import {Steuerbetrag} from 'com/steuerbetrag';
import {Rechnungsposition} from 'com/rechnungsposition';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';

export interface IRechnung extends IGeschaeftsobjekt {
  storno: boolean;
  rechnungsnummer: string;
  rechnungsdatum: Date;
  faelligkeitsdatum: Date;
  rechnungsstyp: Rechnungstyp;
  rechnungsperiode: Zeitraum;
  rechnungsersteller: IGeschaeftspartner;
  rechnungsempfaenger: IGeschaeftspartner;
  gesamtnetto: Betrag;
  gesamtsteuer: Betrag;
  gesamtbrutto: Betrag;
  zuzahlen: Betrag;
  steuerbetraege: Set<Steuerbetrag>;
  rechnungspositionen: Array<Rechnungsposition>;
  originalRechnungsnummer?: string;
  rechnungstitel?: string;
  rechnungsstatus?: Rechnungsstatus;
  vorausgezahlt?: Betrag;
  rabattBrutto?: Betrag;
}

/**
 * Modell für die Abbildung von Rechnungen im Kontext der Energiewirtschaft.
 * Ausgehend von diesem Basismodell werden weitere spezifische Formen abgeleitet.
 *
 * veröffentlicht am 06. Juni 2018
 *
 * @see [BO Rechnung](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-rechnung)
 */
export class Rechnung extends Geschaeftsobjekt implements IRechnung {
  /**
   * Constructor.
   *
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
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public storno: boolean,
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
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.RECHNUNG, externeReferenzen);
  }
}
