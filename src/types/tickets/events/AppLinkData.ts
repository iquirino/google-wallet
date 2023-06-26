import { AppLinkInfo } from "./AppLinkInfo.js"
export type AppLinkData = {
	/**
	 * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the android client.
	 */
	androidAppLinkInfo?: AppLinkInfo;
	/**
	 * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the ios client.
	 */
	iosAppLinkInfo?: AppLinkInfo;
	/**
	 * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the web client.
	 */
	webAppLinkInfo?: AppLinkInfo;
}
