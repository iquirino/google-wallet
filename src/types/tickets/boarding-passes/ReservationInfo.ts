import { FrequentFlyerInfo } from "./FrequentFlyerInfo.js"
export type ReservationInfo = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#reservationInfo".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass.
	 */
	confirmationCode?: string;
	/**
	 * E-ticket number.
	 */
	eticketNumber?: string;
	/**
	 * Frequent flyer membership information.
	 */
	frequentFlyerInfo?: FrequentFlyerInfo;
}
