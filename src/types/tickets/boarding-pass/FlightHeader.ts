import { FlightCarrier } from "./FlightCarrier.js"
export type FlightHeader = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#flightHeader".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Information about airline carrier. This is a required property of flightHeader.
	 */
	carrier?: FlightCarrier;
	/**
	 * eg: "123"
	 */
	flightNumber?: string;
	/**
	 * Information about operating airline carrier.
	 */
	operatingCarrier?: FlightCarrier;
	/**
	 * eg: "234"
	 */
	operatingFlightNumber?: string;
	/**
	 * eg: "XX1234 / YY576"
	 */
	flightNumberDisplayOverride?: string;
}
