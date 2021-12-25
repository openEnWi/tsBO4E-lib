import {Geschaeftsobjekt, IGeschaeftsobjekt} from 'bo/geschaeftsobjekt';
import {Sparte} from 'enum/sparte.enum';
import {Netzebene} from 'enum/netzebene.enum';
import {Adresse} from 'com/adresse';
import {Geokoordinaten} from 'com/geokoordinaten';
import {Katasteradresse} from 'com/katasteradresse';
import {Hardware} from 'com/hardware';
import {Dienstleistungstyp} from 'enum/dienstleistungstyp.enum';
import {BoTyp} from 'enum/bo-typ.enum';
import {ExterneReferenz} from 'com/externe-referenz';
import {Zaehler} from 'bo/zaehler';

export interface IMesslokation extends IGeschaeftsobjekt {
  messlokationsId: string;
  sparte: Sparte;
  messlokationszaehler: Set<Zaehler>;
  geraete: Set<Hardware>;
  messdienstleistung: Set<Dienstleistungstyp>;
  netzebeneMessung?: Netzebene;
  messgebietnr?: string;
  grundzustaendigerMSBCodenr?: string;
  grundzustaendigerMSBIMCodenr?: string;
  messadresse?: Adresse;
  geoadresse?: Geokoordinaten;
  katasterinformation?: Katasteradresse;
}

/**
 * Objekt zur Aufnahme der Informationen zu einer Messlokation.
 *
 * Version 1.1
 * veröffentlicht am 01. Oktober 2021
 *
 * @see [BO Messlokation](https://www.bo4e.de/dokumentation/geschaeftsobjekte/bo-messlokation/1-10-2021)
 */
export class Messlokation extends Geschaeftsobjekt implements IMesslokation {
  /**
   * Constructor.
   *
   * @param {string} messlokationsId
   * @param {Sparte} sparte
   * @param {Set<Zaehler>} messlokationszaehler
   * @param {Set<Hardware>} geraete
   * @param {Set<Dienstleistungstyp>} messdienstleistung
   * @param {Netzebene} netzebeneMessung
   * @param {string} messgebietnr
   * @param {string} grundzustaendigerMSBCodenr
   * @param {string} grundzustaendigerMSBIMCodenr
   * @param {Adresse} messadresse
   * @param {Geokoordinaten} geoadresse
   * @param {Katasteradresse} katasterinformation
   * @param {Set<ExterneReferenz>} externeReferenzen
   */
  constructor(public messlokationsId: string,
              public sparte: Sparte,
              public messlokationszaehler: Set<Zaehler>,
              public geraete: Set<Hardware>,
              public messdienstleistung: Set<Dienstleistungstyp>,
              public netzebeneMessung?: Netzebene,
              public messgebietnr?: string,
              public grundzustaendigerMSBCodenr?: string,
              public grundzustaendigerMSBIMCodenr?: string,
              public messadresse?: Adresse,
              public geoadresse?: Geokoordinaten,
              public katasterinformation?: Katasteradresse,
              public externeReferenzen: Set<ExterneReferenz> = new Set<ExterneReferenz>()) {
    super(BoTyp.MESSLOKATION, externeReferenzen);
  }
}
