import { DateTime } from "./DateTime.js"
export type TimeInterval = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#timeInterval".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Offset is not required. If an offset is provided and end time is set, end must also include an offset.
	 */
	start?: DateTime;
	/**
	 * Offset is not required. If an offset is provided and start time is set, start must also include an offset.
	 */
	end?: DateTime;
}
