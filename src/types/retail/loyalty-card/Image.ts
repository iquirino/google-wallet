import { ImageUri } from "./ImageUri.js"
import { LocalizedString } from "./LocalizedString.js"
export type Image = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#image".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The URI for the image.
	 */
	sourceUri?: ImageUri;
	/**
	 * Description of the image used for accessibility.
	 */
	contentDescription?: LocalizedString;
}
