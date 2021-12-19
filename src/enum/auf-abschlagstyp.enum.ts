import {EnumLabels} from './util/enum-labels';

/**
 * Festlegung, ob der Auf- oder Abschlag mit relativen oder absoluten Werten erfolgt.
 *
 * veröffentlicht am 11. April 2018
 *
 * @see [ENUM AufAbschlagstyp](https://www.bo4e.de/dokumentation/enumerations/enum-aufabschlagstyp)
 */
export enum AufAbschlagstyp {
    RELATIV = 'RELATIV',
    ABSOLUT = 'ABSOLUT',
}

/**
 * Liefert kurze textuelle Repräsentationen eines {@link AufAbschlagstyp}.
 */
export const AufAbschlagstypLabel: EnumLabels<AufAbschlagstyp> = EnumLabels.create([
  [AufAbschlagstyp.RELATIV, 'Prozentualer AufAbschlag'],
  [AufAbschlagstyp.ABSOLUT, 'Absoluter AufAbschlag'],
]);
