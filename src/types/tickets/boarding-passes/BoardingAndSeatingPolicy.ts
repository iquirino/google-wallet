import { BoardingPolicyEnum } from "./BoardingPolicy.js"
import { SeatClassPolicyEnum } from "./SeatClassPolicy.js"
export type BoardingAndSeatingPolicy = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#boardingAndSeatingPolicy".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Indicates the policy the airline uses for boarding. If unset, Google will default to zoneBased.
	 */
	boardingPolicy?: BoardingPolicyEnum;
	/**
	 * Seating policy which dictates how we display the seat class. If unset, Google will default to cabinBased.
	 */
	seatClassPolicy?: SeatClassPolicyEnum;
}
