export type EventReservationInfo = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#eventReservationInfo".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent.
	 */
	confirmationCode?: string;
}
