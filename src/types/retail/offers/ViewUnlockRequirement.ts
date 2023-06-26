export enum ViewUnlockRequirementEnum {
	VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED,
	UNLOCK_NOT_REQUIRED,
	/**
	 * If the user removes their device lock after saving the pass, then they will be prompted to create a device lock before the pass can be viewed.
	 */
	UNLOCK_REQUIRED_TO_VIEW,
}
