import { SharedDataTypeEnum } from "./SharedDataType.js"
import { Uri } from "./Uri.js"
export type DiscoverableProgramMerchantSignupInfo = {
	/**
	 * The URL to direct the user to for the merchant's signup site.
	 */
	signupWebsite?: Uri;
	/**
	 * User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program.
	 */
	signupSharedDatas?: SharedDataTypeEnum[];
}
