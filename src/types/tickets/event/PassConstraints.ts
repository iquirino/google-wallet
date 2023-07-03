import { NfcConstraintEnum } from "./NfcConstraint.js"
import { ScreenshotEligibilityEnum } from "./ScreenshotEligibility.js"
export type PassConstraints = {
	/**
	 * The screenshot eligibility for the pass.
	 */
	screenshotEligibility?: ScreenshotEligibilityEnum;
	/**
	 * The NFC constraints for the pass.
	 */
	nfcConstraint?: NfcConstraintEnum[];
}
