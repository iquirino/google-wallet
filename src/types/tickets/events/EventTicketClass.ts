import { CallbackOptions } from "./CallbackOptions.js"
import { ClassTemplateInfo } from "./ClassTemplateInfo.js"
import { ConfirmationCodeLabelEnum } from "./ConfirmationCodeLabel.js"
import { EventDateTime } from "./EventDateTime.js"
import { EventVenue } from "./EventVenue.js"
import { GateLabelEnum } from "./GateLabel.js"
import { Image } from "./Image.js"
import { ImageModuleData } from "./ImageModuleData.js"
import { InfoModuleData } from "./InfoModuleData.js"
import { LatLongPoint } from "./LatLongPoint.js"
import { LinksModuleData } from "./LinksModuleData.js"
import { LocalizedString } from "./LocalizedString.js"
import { Message } from "./Message.js"
import { MultipleDevicesAndHoldersAllowedStatusEnum } from "./MultipleDevicesAndHoldersAllowedStatus.js"
import { Review } from "./Review.js"
import { ReviewStatusEnum } from "./ReviewStatus.js"
import { RowLabelEnum } from "./RowLabel.js"
import { SeatLabelEnum } from "./SeatLabel.js"
import { SectionLabelEnum } from "./SectionLabel.js"
import { SecurityAnimation } from "./SecurityAnimation.js"
import { TextModuleData } from "./TextModuleData.js"
import { Uri } from "./Uri.js"
import { ViewUnlockRequirementEnum } from "./ViewUnlockRequirement.js"
export type EventTicketClass = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#eventTicketClass".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Required. The name of the event, such as "LA Dodgers at SF Giants".
	 */
	eventName: LocalizedString;
	/**
	 * If not provided, the platform will attempt to use other data to group tickets (potentially unstable).
	 */
	eventId?: string;
	/**
	 * The logo image of the ticket. This image is displayed in the card detail view of the app.
	 */
	logo?: Image;
	/**
	 * Event venue details.
	 */
	venue?: EventVenue;
	/**
	 * The date & time information of the event.
	 */
	dateTime?: EventDateTime;
	/**
	 * Both confirmationCodeLabel and customConfirmationCodeLabel may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.
	 */
	confirmationCodeLabel?: ConfirmationCodeLabelEnum;
	/**
	 * Both confirmationCodeLabel and customConfirmationCodeLabel may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.
	 */
	customConfirmationCodeLabel?: LocalizedString;
	/**
	 * Both seatLabel and customSeatLabel may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.
	 */
	seatLabel?: SeatLabelEnum;
	/**
	 * Both seatLabel and customSeatLabel may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.
	 */
	customSeatLabel?: LocalizedString;
	/**
	 * Both rowLabel and customRowLabel may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.
	 */
	rowLabel?: RowLabelEnum;
	/**
	 * Both rowLabel and customRowLabel may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.
	 */
	customRowLabel?: LocalizedString;
	/**
	 * Both sectionLabel and customSectionLabel may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.
	 */
	sectionLabel?: SectionLabelEnum;
	/**
	 * Both sectionLabel and customSectionLabel may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.
	 */
	customSectionLabel?: LocalizedString;
	/**
	 * Both gateLabel and customGateLabel may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.
	 */
	gateLabel?: GateLabelEnum;
	/**
	 * Both gateLabel and customGateLabel may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.
	 */
	customGateLabel?: LocalizedString;
	/**
	 * The fine print, terms, or conditions of the ticket.
	 */
	finePrint?: LocalizedString;
	/**
	 * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
	 */
	classTemplateInfo?: ClassTemplateInfo;
	/**
	 * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
	 */
	id: string;
	/**
	 * Deprecated
	 * @deprecated
	 */
	version?: number;
	/**
	 * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
	 */
	issuerName: string;
	/**
	 * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
	 */
	messages?: Message[];
	/**
	 * Deprecated. Use multipleDevicesAndHoldersAllowedStatus instead.
	 * @deprecated
	 */
	allowMultipleUsersPerObject?: boolean;
	/**
	 * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
	 */
	homepageUri?: Uri;
	/**
	 * object (LatLongPoint)
	 */
	locations?: LatLongPoint[];
	/**
	 * When updating an already approved class you should keep setting this field to underReview.
	 */
	reviewStatus: ReviewStatusEnum;
	/**
	 * The review comments set by the platform when a class is marked approved or rejected.
	 */
	review?: Review;
	/**
	 * Deprecated. Use textModulesData instead.
	 * @deprecated
	 */
	infoModuleData?: InfoModuleData;
	/**
	 * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
	 */
	imageModulesData?: ImageModuleData[];
	/**
	 * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
	 */
	textModulesData?: TextModuleData[];
	/**
	 * Links module data. If links module data is also defined on the object, both will be displayed.
	 */
	linksModuleData?: LinksModuleData;
	/**
	 * The enableSmartTap and object level smartTapRedemptionLevel fields must also be set up correctly in order for a pass to support Smart Tap.
	 */
	redemptionIssuers?: number[];
	/**
	 * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
	 */
	countryCode?: string;
	/**
	 * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
	 */
	heroImage?: Image;
	/**
	 * Deprecated.
	 * @deprecated
	 */
	wordMark?: Image;
	/**
	 * Identifies whether this class supports Smart Tap. The redemptionIssuers and object level smartTapRedemptionLevel fields must also be set up correctly in order for a pass to support Smart Tap.
	 */
	enableSmartTap?: boolean;
	/**
	 * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as #ffcc00. You can also use the shorthand version of the RGB triplet which is #rgb, such as #fc0.
	 */
	hexBackgroundColor?: string;
	/**
	 * Translated strings for the issuerName. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
	 */
	localizedIssuerName?: LocalizedString;
	/**
	 * Identifies whether multiple users and devices will save the same object referencing this class.
	 */
	multipleDevicesAndHoldersAllowedStatus?: MultipleDevicesAndHoldersAllowedStatusEnum;
	/**
	 * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
	 */
	callbackOptions?: CallbackOptions;
	/**
	 * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
	 */
	securityAnimation?: SecurityAnimation;
	/**
	 * View Unlock Requirement options for the event ticket.
	 */
	viewUnlockRequirement?: ViewUnlockRequirementEnum;
}
