import { AppTarget } from "./AppTarget.js"
import { Image } from "./Image.js"
import { LocalizedString } from "./LocalizedString.js"
export type AppLinkInfo = {
	/**
	 * Optional image to be displayed in the App Link Module
	 */
	appLogoImage?: Image;
	/**
	 * String to be displayed in the title of the App Link Module Required
	 */
	title: LocalizedString;
	/**
	 * String to be displayed in the description of the App Link Module Required
	 */
	description: LocalizedString;
	/**
	 * Url to follow when opening the App Link Module on clients. It will be used by partners to open their webpage or deeplink into their app.
	 */
	appTarget?: AppTarget;
}
