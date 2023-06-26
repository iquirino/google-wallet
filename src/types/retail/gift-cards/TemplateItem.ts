import { FieldSelector } from "./FieldSelector.js"
import { PredefinedItemEnum } from "./PredefinedItem.js"
export type TemplateItem = {
	/**
	 * A reference to a field to display. If both firstValue and secondValue are populated, they will both appear as one item with a slash between them. For example, values A and B would be shown as "A / B".
	 */
	firstValue?: FieldSelector;
	/**
	 * A reference to a field to display. This may only be populated if the firstValue field is populated.
	 */
	secondValue?: FieldSelector;
	/**
	 * A predefined item to display. Only one of firstValue or predefinedItem may be set.
	 */
	predefinedItem?: PredefinedItemEnum;
}
