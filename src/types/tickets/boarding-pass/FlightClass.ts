import { AirportInfo } from "./AirportInfo.js"
import { BoardingAndSeatingPolicy } from "./BoardingAndSeatingPolicy.js"
import { CallbackOptions } from "./CallbackOptions.js"
import { ClassTemplateInfo } from "./ClassTemplateInfo.js"
import { FlightHeader } from "./FlightHeader.js"
import { FlightStatusEnum } from "./FlightStatus.js"
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
import { SecurityAnimation } from "./SecurityAnimation.js"
import { TextModuleData } from "./TextModuleData.js"
import { Uri } from "./Uri.js"
import { ViewUnlockRequirementEnum } from "./ViewUnlockRequirement.js"
export type FlightClass = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#flightClass".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
	 */
	localScheduledDepartureDateTime: string;
	/**
	 * If this is not set, Google will set it based on data from other sources.
	 */
	localEstimatedOrActualDepartureDateTime?: string;
	/**
	 * If this is not set, Google will set it based on data from other sources.
	 */
	localBoardingDateTime?: string;
	/**
	 * If this is not set, Google will set it based on data from other sources.
	 */
	localScheduledArrivalDateTime?: string;
	/**
	 * If this is not set, Google will set it based on data from other sources.
	 */
	localEstimatedOrActualArrivalDateTime?: string;
	/**
	 * Required. Information about the flight carrier and number.
	 */
	flightHeader: FlightHeader;
	/**
	 * Required. Origin airport.
	 */
	origin: AirportInfo;
	/**
	 * Required. Destination airport.
	 */
	destination: AirportInfo;
	/**
	 * Note: Google-computed status will not be returned in API responses.
	 */
	flightStatus?: FlightStatusEnum;
	/**
	 * Policies for boarding and seating. These will inform which labels will be shown to users.
	 */
	boardingAndSeatingPolicy?: BoardingAndSeatingPolicy;
	/**
	 * Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
	 */
	localGateClosingDateTime?: string;
	/**
	 * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
	 */
	classTemplateInfo?: ClassTemplateInfo;
	/**
	 * If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
	 */
	languageOverride?: string;
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
	 * View Unlock Requirement options for the boarding pass.
	 */
	viewUnlockRequirement?: ViewUnlockRequirementEnum;
}
