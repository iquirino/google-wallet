import { LocalizedString } from "./LocalizedString.js"
export type EventSeat = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#eventSeat".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
	 */
	seat?: LocalizedString;
	/**
	 * This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
	 */
	row?: LocalizedString;
	/**
	 * This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
	 */
	section?: LocalizedString;
	/**
	 * This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
	 */
	gate?: LocalizedString;
}
