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
import {Kundentyp} from 'enum/kundentyp.enum';


export interface IMarktlokation extends IGeschaeftsobjekt {
  marktlokationsId: String;
  sparte: Sparte;
  energierichtung: Energierichtung;
  bilanzierungsmethode: Bilanzierungsmethode;
  netzebene: Netzebene;
  verbrauchsart?: Verbrauchsart;
  unterbrechbar?: boolean;
  netzbetreibercodenr?: string;
  gebiettyp?: Gebiettyp;
  gebietId?: string;
  bilanzierungsgebiet?: string;
  grundversorgercodenr?: string;
  gasqualitaet?: Gasqualitaet;
  endkunde?: Geschaeftspartner;
  lokationsadresse?: Adresse;
  geoadresse?: Geokoordinaten;
  katasterinformation?: Katasteradresse;
  zugehoerigeMesslokationen?: Set<Messlokationszuordnung>;
  kundengruppen?: Kundentyp[]
}

/**
 * Objekt zur Aufnahme der Informationen zu einer Marktlokation
 *
 * veröffentlicht am 23. Februar 2022
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
   * @param {string} gebietId
   * @param {string} bilanzierungsgebiet
   * @param {string} grundversorgercodenr
   * @param {Gasqualitaet} gasqualitaet
   * @param {Geschaeftspartner} endkunde
   * @param {Adresse} lokationsadresse
   * @param {Geokoordinaten} geoadresse
   * @param {Katasteradresse} katasterinformation
   * @param {Kundentyp[]} kundengruppen
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
              public gebietId?: string,
              public bilanzierungsgebiet?: string,
              public grundversorgercodenr?: string,
              public gasqualitaet?: Gasqualitaet,
              public endkunde?: Geschaeftspartner,
              public lokationsadresse?: Adresse,
              public geoadresse?: Geokoordinaten,
              public katasterinformation?: Katasteradresse,
              public kundengruppen?: Kundentyp[],
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>(),
  ) {
    super(BoTyp.MARKTLOKATION, externeReferenzen);
  }
}
