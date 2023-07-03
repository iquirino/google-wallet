import { AppLinkData } from "./AppLinkData.js"
import { Barcode } from "./Barcode.js"
import { GenericTypeEnum } from "./GenericType.js"
import { GroupingInfo } from "./GroupingInfo.js"
import { Image } from "./Image.js"
import { ImageModuleData } from "./ImageModuleData.js"
import { LinksModuleData } from "./LinksModuleData.js"
import { LocalizedString } from "./LocalizedString.js"
import { Notifications } from "./Notifications.js"
import { PassConstraints } from "./PassConstraints.js"
import { RotatingBarcode } from "./RotatingBarcode.js"
import { StateEnum } from "./State.js"
import { TextModuleData } from "./TextModuleData.js"
import { TimeInterval } from "./TimeInterval.js"
export type GenericObject = {
	/**
	 * Specify which GenericType the card belongs to.
	 */
	genericType?: GenericTypeEnum;
	/**
	 * Required. The header of the pass. This is usually the Business name such as "XXX Gym", "AAA Insurance". This field is required and appears in the header row at the very top of the pass.
	 */
	cardTitle: LocalizedString;
	/**
	 * The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.
	 */
	subheader?: LocalizedString;
	/**
	 * Required. The title of the pass, such as "50% off coupon" or "Library card" or "Voucher". This field is required and appears in the title row of the pass detail view.
	 */
	header: LocalizedString;
	/**
	 * The logo image of the pass. This image is displayed in the card detail view in upper left, and also on the list/thumbnail view. If the logo is not present, the first letter of cardTitle would be shown as logo.
	 */
	logo?: Image;
	/**
	 * The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.
	 */
	hexBackgroundColor?: string;
	/**
	 * The notification settings that are enabled for this object.
	 */
	notifications?: Notifications;
	/**
	 * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format issuerID.identifier where issuerID is issued by Google and identifier is chosen by you. The unique identifier can only include alphanumeric characters, ., _, or -.
	 */
	id: string;
	/**
	 * Class IDs should follow the format issuerID.identifier where issuerID is issued by Google and identifier is chosen by you.
	 */
	classId: string;
	/**
	 * The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.
	 */
	barcode?: Barcode;
	/**
	 * Banner image displayed on the front of the card if present. The image will be displayed at 100% width.
	 */
	heroImage?: Image;
	/**
	 * The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.
	 */
	validTimeInterval?: TimeInterval;
	/**
	 * Image module data. Only one of the image from class and one from object level will be rendered when both set.
	 */
	imageModulesData?: ImageModuleData[];
	/**
	 * Text module data. If textModulesData is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
	 */
	textModulesData?: TextModuleData[];
	/**
	 * Links module data. If linksModuleData is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
	 */
	linksModuleData?: LinksModuleData;
	/**
	 * Information about the partner app link. The maximum number of these fields displayed is 10.
	 */
	appLinkData?: AppLinkData;
	/**
	 * Information that controls how passes are grouped together.
	 */
	groupingInfo?: GroupingInfo;
	/**
	 * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields enableSmartTap and redemptionIssuers must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
	 */
	smartTapRedemptionValue?: string;
	/**
	 * The rotating barcode settings/details.
	 */
	rotatingBarcode?: RotatingBarcode;
	/**
	 * The state of the object. This field is used to determine how an object is displayed in the app. For example, an inactive object is moved to the "Expired passes" section. If this is not provided, the object would be considered ACTIVE.
	 */
	state?: StateEnum;
	/**
	 * Indicates if the object has users. This field is set by the platform.
	 */
	hasUsers?: boolean;
	/**
	 * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
	 */
	passConstraints?: PassConstraints;
}
