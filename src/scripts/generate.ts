import fs from "fs";
import { ScrapOptions, scrap } from "../generator/index.js";
import got from "got";
import { generateExports } from "../generator/generateExports.js";

const baseUrl = "https://developers.google.com";

(async () => {
  fs.existsSync("src/types") && fs.rmSync("src/types", { recursive: true });
  fs.mkdirSync("src/types");

  const toScrap: ScrapOptions[] = [
    {
      type: "retail/loyalty-card",
      docsUrl: `/wallet/retail/loyalty-cards/rest/v1/`,
      pojos: [
        {
          name: "LoyaltyClass",
          objects: [
            "LoyaltyClass.DiscoverableProgram",
            "LoyaltyClass.DiscoverableProgramMerchantSignupInfo",
            "LoyaltyClass.DiscoverableProgramMerchantSigninInfo",
            "LoyaltyClass.ViewUnlockRequirement",
            "LoyaltyClass.SharedDataType",
          ],
          data: await got(`${baseUrl}/wallet/retail/loyalty-cards/rest/v1/loyaltyclass`).text(),
        },
        {
          name: "LoyaltyObject",
          objects: ["LoyaltyPoints", "LoyaltyPointsBalance"],
          data: await got(`${baseUrl}/wallet/retail/loyalty-cards/rest/v1/loyaltyobject`).text(),
        },
      ],
      additionalTypes: ["ViewUnlockRequirement"],
    },
    {
      type: "retail/gift-card",
      docsUrl: `/wallet/retail/gift-cards/rest/v1/`,
      pojos: [
        {
          name: "GiftCardClass",
          objects: [],
          data: await got(`${baseUrl}/wallet/retail/gift-cards/rest/v1/giftcardclass`).text(),
        },
        {
          name: "GiftCardObject",
          objects: [],
          data: await got(`${baseUrl}/wallet/retail/gift-cards/rest/v1/giftcardobject`).text(),
        },
      ],
      additionalTypes: ["ViewUnlockRequirement", "GroupingInfo"],
    },
    {
      type: "retail/offer",
      docsUrl: `/wallet/retail/offers/rest/v1/`,
      pojos: [
        {
          name: "OfferClass",
          objects: ["OfferClass.RedemptionChannel"],
          data: await got(`${baseUrl}/wallet/retail/offers/rest/v1/offerclass`).text(),
        },
        {
          name: "OfferObject",
          objects: [],
          data: await got(`${baseUrl}/wallet/retail/offers/rest/v1/offerobject`).text(),
        },
      ],
      additionalTypes: ["ViewUnlockRequirement", "GroupingInfo"],
    },
    {
      type: "tickets/boarding-pass",
      docsUrl: `/wallet/tickets/boarding-passes/rest/v1/`,
      pojos: [
        {
          name: "FlightClass",
          objects: ["FlightClass.FlightHeader", "FlightClass.FlightCarrier", "FlightClass.AirportInfo", "FlightClass.FlightStatus", "FlightClass.BoardingAndSeatingPolicy", "FlightClass.BoardingPolicy", "FlightClass.SeatClassPolicy"],
          data: await got(`${baseUrl}/wallet/tickets/boarding-passes/rest/v1/flightclass`).text(),
        },
        {
          name: "FlightObject",
          objects: ["BoardingAndSeatingInfo", "BoardingDoor", "ReservationInfo", "FrequentFlyerInfo"],
          data: await got(`${baseUrl}/wallet/tickets/boarding-passes/rest/v1/flightobject`).text(),
        },
      ],
      additionalTypes: ["ViewUnlockRequirement", "GroupingInfo"],
    },
    {
      type: "tickets/event",
      docsUrl: `/wallet/tickets/events/rest/v1/`,
      pojos: [
        {
          name: "EventTicketClass",
          objects: ["EventTicketClass.EventVenue", "EventTicketClass.EventDateTime", "EventTicketClass.DoorsOpenLabel", "EventTicketClass.ConfirmationCodeLabel", "EventTicketClass.SeatLabel", "EventTicketClass.RowLabel", "EventTicketClass.SectionLabel", "EventTicketClass.GateLabel"],
          data: await got(`${baseUrl}/wallet/tickets/events/rest/v1/eventticketclass`).text(),
        },
        {
          name: "EventTicketObject",
          objects: ["EventSeat", "EventReservationInfo"],
          data: await got(`${baseUrl}/wallet/tickets/events/rest/v1/eventticketobject`).text(),
        },
      ],
      additionalTypes: ["ViewUnlockRequirement", "GroupingInfo"],
    },
    {
      type: "generic",
      docsUrl: `/wallet/generic/rest/v1/`,
      pojos: [
        {
          name: "GenericClass",
          objects: [],
          data: await got(`${baseUrl}/wallet/generic/rest/v1/genericclass`).text(),
        },
        {
          name: "GenericObject",
          objects: ["GenericType", "Notifications", "ExpiryNotification", "UpcomingNotification"],
          data: await got(`${baseUrl}/wallet/generic/rest/v1/genericobject`).text(),
        },
        {
          name: "Issuer",
          objects: ["IssuerContactInfo", "SmartTapMerchantData", "AuthenticationKey", ],
          data: await got(`${baseUrl}/wallet/generic/rest/v1/issuer`).text(),
        }
      ],
      additionalTypes: ["TimeInterval"],
    },
  ];

  const scrapPromises = toScrap.map(async (scrapOptions) => {
    await scrap(scrapOptions);
  });

  await Promise.all(scrapPromises);

  generateExports();

  console.log("Done");
})();
