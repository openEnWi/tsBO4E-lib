import {Netzebene} from 'enum/netzebene.enum';
import {Zeitraum} from 'com/zeitraum';
import {Zaehlertyp} from 'enum/zaehlertyp.enum';
import {Adresse} from 'com/adresse';
import {Menge} from 'com/menge';

/**
 * Die Komponente Ausschreibungsdetail wird verwendet um die Informationen
 * zu einer Abnahmestelle innerhalb eines Ausschreibungsloses abzubilden.
 *
 * veröffentlicht am 13. März 2018
 *
 * @see [COM Ausschreibungsdetail](https://www.bo4e.de/dokumentation/komponenten/com-ausschreibungsdetail)
 */
export class Ausschreibungsdetail {
  /**
   * Constructor.
   *
   * @param {string} lokationsId
   * @param {Netzebene} netzebeneLieferung
   * @param {Netzebene} netzebeneMessung
   * @param {Zeitraum} lieferzeitraum
   * @param {string} lokationsbezeichnung
   * @param {string} netzbetreiber
   * @param {string} kunde
   * @param {string} zaehlernummer
   * @param {Zaehlertyp} zaehlertechnik
   * @param {boolean} lastgangVorhanden
   * @param {Adresse} lokationsadresse
   * @param {Adresse} rechnungsadresse
   * @param {Menge} prognoseJahresarbeit
   * @param {Menge} prognoseArbeitLieferzeitraum
   * @param {Menge} prognoseLeistung
   */
  constructor(public lokationsId: string,
              public netzebeneLieferung: Netzebene,
              public netzebeneMessung: Netzebene,
              public lieferzeitraum: Zeitraum,
              public lokationsbezeichnung?: string,
              public netzbetreiber?: string,
              public kunde?: string,
              public zaehlernummer?: string,
              public zaehlertechnik?: Zaehlertyp,
              public lastgangVorhanden?: boolean,
              public lokationsadresse?: Adresse,
              public rechnungsadresse?: Adresse,
              public prognoseJahresarbeit?: Menge,
              public prognoseArbeitLieferzeitraum?: Menge,
              public prognoseLeistung?: Menge,
  ) {
  }
}
