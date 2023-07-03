import { LocalizedString } from "./LocalizedString.js"
export type ImageUri = {
	/**
	 * The location of the image. URIs must have a scheme.
	 */
	uri?: string;
	/**
	 * Additional information about the image, which is unused and retained only for backward compatibility.
	 * @deprecated
	 */
	description?: string;
	/**
	 * Translated strings for the description, which are unused and retained only for backward compatibility.
	 * @deprecated
	 */
	localizedDescription?: LocalizedString;
}
