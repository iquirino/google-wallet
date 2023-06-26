export type Money = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#money".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros.
	 */
	micros?: number;
	/**
	 * The currency code, such as "USD" or "EUR."
	 */
	currencyCode?: string;
}
