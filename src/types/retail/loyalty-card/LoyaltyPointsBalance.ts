import { Money } from "./Money.js"
export type LoyaltyPointsBalance = {
	/**
	 * The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
	 */
	string?: string;
	/**
	 * The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
	 */
	int?: number;
	/**
	 * The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
	 */
	double?: number;
	/**
	 * The money form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
	 */
	money?: Money;
}
