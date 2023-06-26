export type TranslatedString = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#translatedString".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
	 */
	language?: string;
	/**
	 * The UTF-8 encoded translated string.
	 */
	value?: string;
}
