import { DoorsOpenLabelEnum } from "./DoorsOpenLabel.js"
import { LocalizedString } from "./LocalizedString.js"
export type EventDateTime = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#eventDateTime".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Without offset information, some rich features may not be available.
	 */
	doorsOpen?: string;
	/**
	 * Without offset information, some rich features may not be available.
	 */
	start?: string;
	/**
	 * Without offset information, some rich features may not be available.
	 */
	end?: string;
	/**
	 * Both doorsOpenLabel and customDoorsOpenLabel may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.
	 */
	doorsOpenLabel?: DoorsOpenLabelEnum;
	/**
	 * Both doorsOpenLabel and customDoorsOpenLabel may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.
	 */
	customDoorsOpenLabel?: LocalizedString;
}
