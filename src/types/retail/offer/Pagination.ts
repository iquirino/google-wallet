export type Pagination = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#pagination".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Number of results returned in this page.
	 */
	resultsPerPage?: number;
	/**
	 * Page token to send to fetch the next page.
	 */
	nextPageToken?: string;
}
