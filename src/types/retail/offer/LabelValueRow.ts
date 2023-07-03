import { LabelValue } from "./LabelValue.js"
export type LabelValueRow = {
	/**
	 * A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name.
	 */
	columns?: LabelValue[];
}
