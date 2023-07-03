export type TotpParameters = {
	/**
	 * The secret key used for the TOTP value generation, encoded as a Base16 string.
	 */
	key?: string;
	/**
	 * The length of the TOTP value in decimal digits.
	 */
	valueLength?: number;
}
