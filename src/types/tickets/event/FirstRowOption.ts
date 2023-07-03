import { FieldSelector } from "./FieldSelector.js"
import { TransitOptionEnum } from "./TransitOption.js"
export type FirstRowOption = {
	/**
	 * enum (TransitOption)
	 */
	transitOption?: TransitOptionEnum;
	/**
	 * A reference to the field to be displayed in the first row.
	 */
	fieldOption?: FieldSelector;
}
