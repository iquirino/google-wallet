export type LatLongPoint = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#latLongPoint".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected.
	 */
	latitude?: number;
	/**
	 * The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected.
	 */
	longitude?: number;
}
