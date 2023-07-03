import { LocalizedString } from "./LocalizedString.js"
export type FrequentFlyerInfo = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#frequentFlyerInfo".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Frequent flyer program name. eg: "Lufthansa Miles & More"
	 */
	frequentFlyerProgramName?: LocalizedString;
	/**
	 * Required for each nested object of kind walletobjects#frequentFlyerInfo.
	 */
	frequentFlyerNumber: string;
}
