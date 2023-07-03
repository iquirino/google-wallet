import { Image } from "./Image.js"
import { LocalizedString } from "./LocalizedString.js"
export type FlightCarrier = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#flightCarrier".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * eg: "LX" for Swiss Air
	 */
	carrierIataCode?: string;
	/**
	 * eg: "EZY" for Easy Jet
	 */
	carrierIcaoCode?: string;
	/**
	 * eg: "Swiss Air" for "LX"
	 */
	airlineName?: LocalizedString;
	/**
	 * A logo for the airline described by carrierIataCode and localizedAirlineName. This logo will be rendered at the top of the detailed card view.
	 */
	airlineLogo?: Image;
	/**
	 * A logo for the airline alliance, displayed above the QR code that the passenger scans to board.
	 */
	airlineAllianceLogo?: Image;
}
