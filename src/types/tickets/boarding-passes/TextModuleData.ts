import { LocalizedString } from "./LocalizedString.js"
export type TextModuleData = {
	/**
	 * The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.
	 */
	header?: string;
	/**
	 * The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.
	 */
	body?: string;
	/**
	 * Translated strings for the header. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.
	 */
	localizedHeader?: LocalizedString;
	/**
	 * Translated strings for the body. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.
	 */
	localizedBody?: LocalizedString;
	/**
	 * The ID associated with a text module. This field is here to enable ease of management of text modules.
	 */
	id?: string;
}
