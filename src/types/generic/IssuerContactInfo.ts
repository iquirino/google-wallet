export type IssuerContactInfo = {
	/**
	 * The primary contact name.
	 */
	name?: string;
	/**
	 * The primary contact phone number.
	 */
	phone?: string;
	/**
	 * The primary contact email address.
	 */
	email?: string;
	/**
	 * Email addresses which will receive alerts.
	 */
	alertsEmails?: string[];
}
