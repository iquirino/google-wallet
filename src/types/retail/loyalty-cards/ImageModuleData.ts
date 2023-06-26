import { Image } from "./Image.js"
export type ImageModuleData = {
	/**
	 * A 100% width image.
	 */
	mainImage?: Image;
	/**
	 * The ID associated with an image module. This field is here to enable ease of management of image modules.
	 */
	id?: string;
}
