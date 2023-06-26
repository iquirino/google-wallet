import { LocalizedString } from "./LocalizedString.js"
export type LabelValue = {
	/**
	 * The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
	 */
	label?: string;
	/**
	 * The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
	 */
	value?: string;
	/**
	 * Translated strings for the label. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
	 */
	localizedLabel?: LocalizedString;
	/**
	 * Translated strings for the value. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
	 */
	localizedValue?: LocalizedString;
}
