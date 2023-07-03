import { CallbackOptions } from "./CallbackOptions.js"
import { ClassTemplateInfo } from "./ClassTemplateInfo.js"
import { Image } from "./Image.js"
import { ImageModuleData } from "./ImageModuleData.js"
import { InfoModuleData } from "./InfoModuleData.js"
import { LatLongPoint } from "./LatLongPoint.js"
import { LinksModuleData } from "./LinksModuleData.js"
import { LocalizedString } from "./LocalizedString.js"
import { Message } from "./Message.js"
import { MultipleDevicesAndHoldersAllowedStatusEnum } from "./MultipleDevicesAndHoldersAllowedStatus.js"
import { RedemptionChannelEnum } from "./RedemptionChannel.js"
import { Review } from "./Review.js"
import { ReviewStatusEnum } from "./ReviewStatus.js"
import { SecurityAnimation } from "./SecurityAnimation.js"
import { TextModuleData } from "./TextModuleData.js"
import { Uri } from "./Uri.js"
import { ViewUnlockRequirementEnum } from "./ViewUnlockRequirement.js"
export type OfferClass = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#offerClass".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.
	 */
	title: string;
	/**
	 * Required. The redemption channels applicable to this offer.
	 */
	redemptionChannel: RedemptionChannelEnum;
	/**
	 * Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.
	 */
	provider: string;
	/**
	 * The title image of the offer. This image is displayed in both the details and list views of the app.
	 */
	titleImage?: Image;
	/**
	 * The details of the offer.
	 */
	details?: string;
	/**
	 * The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel."
	 */
	finePrint?: string;
	/**
	 * The help link for the offer, such as http://myownpersonaldomain.com/help
	 */
	helpUri?: Uri;
	/**
	 * Translated strings for the title. Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.
	 */
	localizedTitle?: LocalizedString;
	/**
	 * Translated strings for the provider. Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.
	 */
	localizedProvider?: LocalizedString;
	/**
	 * Translated strings for the details.
	 */
	localizedDetails?: LocalizedString;
	/**
	 * Translated strings for the finePrint.
	 */
	localizedFinePrint?: LocalizedString;
	/**
	 * A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters.
	 */
	shortTitle?: string;
	/**
	 * Translated strings for the short title. Recommended maximum length is 20 characters.
	 */
	localizedShortTitle?: LocalizedString;
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
	 * The list of locations where the object can be used. The platform uses this information to trigger geolocated notifications to users. Note that locations in the object override locations in the class which override locations in the Google Places ID.
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
	 * View Unlock Requirement options for the offer.
	 */
	viewUnlockRequirement?: ViewUnlockRequirementEnum;
}
