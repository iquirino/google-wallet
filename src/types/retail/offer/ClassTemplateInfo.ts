import { CardBarcodeSectionDetails } from "./CardBarcodeSectionDetails.js"
import { CardTemplateOverride } from "./CardTemplateOverride.js"
import { DetailsTemplateOverride } from "./DetailsTemplateOverride.js"
import { ListTemplateOverride } from "./ListTemplateOverride.js"
export type ClassTemplateInfo = {
	/**
	 * Specifies extra information to be displayed above and below the barcode.
	 */
	cardBarcodeSectionDetails?: CardBarcodeSectionDetails;
	/**
	 * Override for the card view.
	 */
	cardTemplateOverride?: CardTemplateOverride;
	/**
	 * Override for the details view (beneath the card view).
	 */
	detailsTemplateOverride?: DetailsTemplateOverride;
	/**
	 * Override for the passes list view.
	 */
	listTemplateOverride?: ListTemplateOverride;
}
