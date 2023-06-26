export type CallbackOptions = {
	/**
	 * The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by  UserAgent:Google-Valuables.
	 */
	url?: string;
	/**
	 * URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated.
	 * @deprecated
	 */
	updateRequestUrl?: string;
}
