import {Sparte} from 'enum/sparte.enum';
import {Energierichtung} from 'enum/energierichtung.enum';
import {Bilanzierungsmethode} from 'enum/bilanzierungsmethode.enum';
import {Verbrauchsart} from 'enum/verbrauchsart.enum';
import {Netzebene} from 'enum/netzebene.enum';
import {Gasqualitaet} from 'enum/gasqualitaet.enum';
import {Gebiettyp} from 'enum/gebiettyp.enum';
import {Geschaeftspartner} from 'bo/geschaeftspartner';
import {Adresse} from 'com/adresse';
import {Katasteradresse} from 'com/katasteradresse';
import {Geokoordinaten} from 'com/geokoordinaten';
import {Messlokationszuordnung} from 'com/messlokationszuordnung';
import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';


export interface IMarktlokation extends IGeschaeftsobjekt {
  marktlokationsId: String;
  sparte: Sparte;
  energierichtung: Energierichtung;
  bilanzierungsmethode: Bilanzierungsmethode;
  verbrauchsart?: Verbrauchsart;
  unterbrechbar?: boolean;
  netzebene: Netzebene;
  netzbetreibercodenr?: string;
  gebiettyp?: Gebiettyp;
  netzgebietnr?: string;
  bilanzierungsgebiet?: string;
  grundversorgercodenr?: string;
  gasqualitaet?: Gasqualitaet;
  endkunde?: Geschaeftspartner;
  lokationsadresse?: Adresse;
  geoadresse?: Geokoordinaten;
  katasterinformation?: Katasteradresse;
  zugehoerigeMesslokationen?: Set<Messlokationszuordnung>;
}

/**
 * Objekt zur Aufnahme der Informationen zu einer Marktlokation
 *
 * veröffentlicht am 17. Januar 2018
 *
 * @see [BO Marktlokation](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-marktlokation)
 */
export class Marktlokation extends Geschaeftsobjekt implements IMarktlokation {
  /**
   * Constructor.
   *
   * @param {string} marktlokationsId
   * @param {sparte} sparte
   * @param {energierichtung} energierichtung
   * @param {Bilanzierungsmethode} bilanzierungsmethode
   * @param {Netzebene} netzebene
   * @param {Set<Messlokationszuordnung>} zugehoerigeMesslokationen
   * @param {Verbrauchsart} verbrauchsart
   * @param {boolean} unterbrechbar
   * @param {string} netzbetreibercodenr
   * @param {Gebiettyp} gebiettyp
   * @param {string} netzgebietnr
   * @param {string} bilanzierungsgebiet
   * @param {string} grundversorgercodenr
   * @param {Gasqualitaet} gasqualitaet
   * @param {Geschaeftspartner} endkunde
   * @param {Adresse} lokationsadresse
   * @param {Geokoordinaten} geoadresse
   * @param {Katasteradresse} katasterinformation
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public marktlokationsId: string,
              public sparte: Sparte,
              public energierichtung: Energierichtung,
              public bilanzierungsmethode: Bilanzierungsmethode,
              public netzebene: Netzebene,
              public zugehoerigeMesslokationen: Set<Messlokationszuordnung>,
              public verbrauchsart?: Verbrauchsart,
              public unterbrechbar?: boolean,
              public netzbetreibercodenr?: string,
              public gebiettyp?: Gebiettyp,
              public netzgebietnr?: string,
              public bilanzierungsgebiet?: string,
              public grundversorgercodenr?: string,
              public gasqualitaet?: Gasqualitaet,
              public endkunde?: Geschaeftspartner,
              public lokationsadresse?: Adresse,
              public geoadresse?: Geokoordinaten,
              public katasterinformation?: Katasteradresse,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>(),
  ) {
    super(BoTyp.MARKTLOKATION, externeReferenzen);
  }
}
