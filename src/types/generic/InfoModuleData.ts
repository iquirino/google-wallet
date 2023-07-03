import { LabelValueRow } from "./LabelValueRow.js"
export type InfoModuleData = {
	/**
	 * A list of collections of labels and values. These will be displayed one after the other in a singular column.
	 */
	labelValueRows?: LabelValueRow[];
	/**
	 * This item is deprecated!
	 * @deprecated
	 */
	showLastUpdateTime?: boolean;
}
