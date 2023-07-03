import { CallbackOptions } from "./CallbackOptions.js"
import { ClassTemplateInfo } from "./ClassTemplateInfo.js"
import { ImageModuleData } from "./ImageModuleData.js"
import { LinksModuleData } from "./LinksModuleData.js"
import { MultipleDevicesAndHoldersAllowedStatusEnum } from "./MultipleDevicesAndHoldersAllowedStatus.js"
import { SecurityAnimation } from "./SecurityAnimation.js"
import { TextModuleData } from "./TextModuleData.js"
import { ViewUnlockRequirementEnum } from "./ViewUnlockRequirement.js"
export type GenericClass = {
	/**
	 * Required. The unique identifier for the class. This ID must be unique across all  from an issuer. This value needs to follow the format issuerID.identifier where issuerID is issued by Google and identifier is chosen by you. The unique identifier can only include alphanumeric characters, ., _, or -.
	 */
	id: string;
	/**
	 * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
	 */
	classTemplateInfo?: ClassTemplateInfo;
	/**
	 * Image module data. If imageModulesData is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set.
	 */
	imageModulesData?: ImageModuleData[];
	/**
	 * Text module data. If textModulesData is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
	 */
	textModulesData?: TextModuleData[];
	/**
	 * Links module data. If linksModuleData is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
	 */
	linksModuleData?: LinksModuleData;
	/**
	 * Available only to Smart Tap enabled partners. Contact support for additional guidance.
	 */
	enableSmartTap?: boolean;
	/**
	 * The enableSmartTap and object level smartTapRedemptionLevel fields must also be set up correctly in order for a pass to support Smart Tap.
	 */
	redemptionIssuers?: number[];
	/**
	 * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
	 */
	securityAnimation?: SecurityAnimation;
	/**
	 * Identifies whether multiple users and devices will save the same object referencing this class.
	 */
	multipleDevicesAndHoldersAllowedStatus?: MultipleDevicesAndHoldersAllowedStatusEnum;
	/**
	 * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
	 */
	callbackOptions?: CallbackOptions;
	/**
	 * View Unlock Requirement options for the generic pass.
	 */
	viewUnlockRequirement?: ViewUnlockRequirementEnum;
}
