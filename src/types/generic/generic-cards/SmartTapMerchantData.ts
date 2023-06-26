import { AuthenticationKey } from "./AuthenticationKey.js"
export type SmartTapMerchantData = {
	/**
	 * Available only to Smart Tap enabled partners. Contact support for additional guidance.
	 */
	smartTapMerchantId?: number;
	/**
	 * Available only to Smart Tap enabled partners. Contact support for additional guidance.
	 */
	authenticationKeys?: AuthenticationKey[];
}
