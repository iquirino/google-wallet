import { TranslatedString } from "./TranslatedString.js"
export type LocalizedString = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#localizedString".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Contains the translations for the string.
	 */
	translatedValues?: TranslatedString[];
	/**
	 * Contains the string to be displayed if no appropriate translation is available.
	 */
	defaultValue?: TranslatedString;
}
