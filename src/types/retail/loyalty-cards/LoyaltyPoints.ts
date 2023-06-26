import { LocalizedString } from "./LocalizedString.js"
import { LoyaltyPointsBalance } from "./LoyaltyPointsBalance.js"
export type LoyaltyPoints = {
	/**
	 * The loyalty points label, such as "Points". Recommended maximum length is 9 characters.
	 */
	label?: string;
	/**
	 * The account holder's loyalty point balance, such as "500" or "$10.00". Recommended maximum length is 7 characters. This is a required field of loyaltyPoints and secondaryLoyaltyPoints.
	 */
	balance?: LoyaltyPointsBalance;
	/**
	 * Translated strings for the label. Recommended maximum length is 9 characters.
	 */
	localizedLabel?: LocalizedString;
}
