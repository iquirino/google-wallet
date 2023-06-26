import { BoardingDoorEnum } from "./BoardingDoor.js"
import { Image } from "./Image.js"
import { LocalizedString } from "./LocalizedString.js"
export type BoardingAndSeatingInfo = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#boardingAndSeatingInfo".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The label for this value will be determined by the boardingPolicy field in the flightClass referenced by this object.
	 */
	boardingGroup?: string;
	/**
	 * eg: "25A"
	 */
	seatNumber?: string;
	/**
	 * eg: "Economy" or "Economy Plus"
	 */
	seatClass?: string;
	/**
	 * A small image shown above the boarding barcode. Airlines can use it to communicate any special boarding privileges. In the event the security program logo is also set, this image might be rendered alongside the logo for that security program.
	 */
	boardingPrivilegeImage?: Image;
	/**
	 * eg: "76"
	 */
	boardingPosition?: string;
	/**
	 * eg: "49"
	 */
	sequenceNumber?: string;
	/**
	 * Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the seatClass. In those cases boardingDoor should not be set.
	 */
	boardingDoor?: BoardingDoorEnum;
	/**
	 * eg: "assigned at gate"
	 */
	seatAssignment?: LocalizedString;
}
