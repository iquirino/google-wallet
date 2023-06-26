import { ExpiryNotification } from "./ExpiryNotification.js"
import { UpcomingNotification } from "./UpcomingNotification.js"
export type Notifications = {
	/**
	 * A notification would be triggered at a specific time before the card expires.
	 */
	expiryNotification?: ExpiryNotification;
	/**
	 * A notification would be triggered at a specific time before the card becomes usable.
	 */
	upcomingNotification?: UpcomingNotification;
}
