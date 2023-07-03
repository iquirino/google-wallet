import { TotpAlgorithmEnum } from "./TotpAlgorithm.js"
import { TotpParameters } from "./TotpParameters.js"
export type TotpDetails = {
	/**
	 * The time interval used for the TOTP value generation, in milliseconds.
	 */
	periodMillis?: number;
	/**
	 * The TOTP algorithm used to generate the OTP.
	 */
	algorithm?: TotpAlgorithmEnum;
	/**
	 * The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution.
	 */
	parameters?: TotpParameters[];
}
