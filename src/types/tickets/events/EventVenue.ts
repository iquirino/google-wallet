import { LocalizedString } from "./LocalizedString.js"
export type EventVenue = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#eventVenue".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * This is required.
	 */
	name?: LocalizedString;
	/**
	 * This is required.
	 */
	address?: LocalizedString;
}
