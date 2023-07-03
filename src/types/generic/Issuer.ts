import { IssuerContactInfo } from "./IssuerContactInfo.js"
import { SmartTapMerchantData } from "./SmartTapMerchantData.js"
export type Issuer = {
	/**
	 * The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.
	 */
	issuerId?: number;
	/**
	 * The account name of the issuer.
	 */
	name?: string;
	/**
	 * Issuer contact information.
	 */
	contactInfo?: IssuerContactInfo;
	/**
	 * URL for the issuer's home page.
	 */
	homepageUrl?: string;
	/**
	 * Available only to Smart Tap enabled partners. Contact support for additional guidance.
	 */
	smartTapMerchantData?: SmartTapMerchantData;
}
