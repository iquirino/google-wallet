import { FieldSelector } from "./FieldSelector.js"
import { FirstRowOption } from "./FirstRowOption.js"
export type ListTemplateOverride = {
	/**
	 * Specifies from a predefined set of options or from a reference to the field what will be displayed in the first row.
	 */
	firstRowOption?: FirstRowOption;
	/**
	 * This option is only displayed if there are not multiple user objects in a group. If there is a group, the second row will always display a field shared by all objects.
	 */
	secondRowOption?: FieldSelector;
	/**
	 * This option is only displayed if there are not multiple user objects in a group. If there is a group, the third row will always display the number of objects in the group. Eg: "3 passes"
	 * @deprecated
	 */
	thirdRowOption?: FieldSelector;
}
