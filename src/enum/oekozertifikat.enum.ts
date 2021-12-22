import {EnumLabels} from './util/enum-labels';

/**
 * Zertifikate für Ökostrom von verschiedenen Herausgebern.
 *
 * veröffentlicht am 30. Mai 2018
 *
 * @see [ENUM Oekozertifikat](https://www.bo4e.de/dokumentation/enumerations/enum-oekozertifikat)
 */
export enum Oekozertifikat {
    CMS_EE01 = 'CMS_EE01',
    CMS_EE02 = 'CMS_EE02',
    EECS = 'EECS',
    FRAUNHOFER = 'FRAUNHOFER',
    BET = 'BET',
    KLIMA_INVEST = 'KLIMA_INVEST',
    LGA = 'LGA',
    FREIBERG = 'FREIBERG',
    RECS = 'RECS',
    REGS_EGL = 'REGS_EGL',
    TUEV = 'TUEV',
    TUEV_HESSEN = 'TUEV_HESSEN',
    TUEV_NORD = 'TUEV_NORD',
    TUEV_RHEINLAND = 'TUEV_RHEINLAND',
    TUEV_SUED = 'TUEV_SUED',
    TUEV_SUED_EE01 = 'TUEV_SUED_EE01',
    TUEV_SUED_EE02 = 'TUEV_SUED_EE02',
}

/**
 * Liefert kurze textuelle Repräsentationen des {@link Oekozertifikat}.
 */
export const OekozertifikatLabel: EnumLabels<Oekozertifikat> = EnumLabels.of([
  [Oekozertifikat.CMS_EE01, 'CMS Standard EEO1'],
  [Oekozertifikat.CMS_EE02, 'CMS Standard EEO2'],
  [Oekozertifikat.EECS, 'EECS'],
  [Oekozertifikat.FRAUNHOFER, 'Fraunhofer Institut'],
  [Oekozertifikat.BET, 'Gutachten von BET Aachen'],
  [Oekozertifikat.KLIMA_INVEST, 'KlimaINVEST'],
  [Oekozertifikat.LGA, 'LGA (Landesgewerbeanstalt Bayern)'],
  [Oekozertifikat.FREIBERG, 'Oeko Institut e.V. Freiburg'],
  [Oekozertifikat.RECS, 'RECS'],
  [Oekozertifikat.REGS_EGL, 'REGS für EGL AG'],
  [Oekozertifikat.TUEV, 'TUEV'],
  [Oekozertifikat.TUEV_HESSEN, 'TUEV Hessen'],
  [Oekozertifikat.TUEV_NORD, 'TUEV Nord'],
  [Oekozertifikat.TUEV_RHEINLAND, 'TUEV Rheinland'],
  [Oekozertifikat.TUEV_SUED, 'TUEV Sued'],
  [Oekozertifikat.TUEV_SUED_EE01, 'TUEV Sued EE01'],
  [Oekozertifikat.TUEV_SUED_EE02, 'TUEV Sued EE02'],
]);
