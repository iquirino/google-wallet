import { BarcodeSectionDetail } from "./BarcodeSectionDetail.js"
export type CardBarcodeSectionDetails = {
	/**
	 * Optional information to display above the barcode. If secondTopDetail is defined, this will be displayed to the start side of this detail section.
	 */
	firstTopDetail?: BarcodeSectionDetail;
	/**
	 * Optional information to display below the barcode.
	 */
	firstBottomDetail?: BarcodeSectionDetail;
	/**
	 * Optional second piece of information to display above the barcode. If firstTopDetail is defined, this will be displayed to the end side of this detail section.
	 */
	secondTopDetail?: BarcodeSectionDetail;
}
