import { LocalizedString } from "./LocalizedString.js"
import { MessageTypeEnum } from "./MessageType.js"
import { TimeInterval } from "./TimeInterval.js"
export type Message = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string "walletobjects#walletObjectMessage".
	 * @deprecated
	 */
	kind?: string;
	/**
	 * The message header.
	 */
	header?: string;
	/**
	 * The message body.
	 */
	body?: string;
	/**
	 * The period of time that the message will be displayed to users. You can define both a startTime and endTime for each message. A message is displayed immediately after a Wallet Object is inserted unless a startTime is set. The message will appear in a list of messages indefinitely if endTime is not provided.
	 */
	displayInterval?: TimeInterval;
	/**
	 * The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message.
	 */
	id?: string;
	/**
	 * The type of the message. Currently, this can only be set for offers.
	 */
	messageType?: MessageTypeEnum;
	/**
	 * Translated strings for the message header.
	 */
	localizedHeader?: LocalizedString;
	/**
	 * Translated strings for the message body.
	 */
	localizedBody?: LocalizedString;
}
