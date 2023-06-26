import { LocalizedString } from "./LocalizedString.js"
export type AirportInfo = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#airportInfo".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Eg: "SFO"
	 */
	airportIataCode?: string;
	/**
	 * Terminal name. Eg: "INTL" or "I"
	 */
	terminal?: string;
	/**
	 * A name of the gate. Eg: "B59" or "59"
	 */
	gate?: string;
	/**
	 * However, populating this field with a custom name (eg: "London Luton") would override it.
	 */
	airportNameOverride?: LocalizedString;
}
