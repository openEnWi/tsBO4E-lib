import {ImmutableMap} from './immutable-map';

/**
 * Diese Klasse ermöglicht das zuweisen und abrufen von Labels für einen Wert in einem Enum vom Typ T,
 * als weitere Information.
 */
export class EnumLabels<T> extends ImmutableMap<T, string> {
}
