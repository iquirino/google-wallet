# Google Wallet TypeScript Library

The Google Wallet TypeScript library provides a convenient way to manage Google Wallet functionality in your TypeScript or JavaScript projects. It offers a simple and intuitive interface for integrating with the Google Wallet REST API.

### References/Links
[Google Wallet Tutorial](https://codelabs.developers.google.com/add-to-wallet-web#0)

[Google Wallet Documentation](https://developers.google.com/wallet)

---

## Installation

You can install the library via npm:

```bash
npm install google-wallet
```

## Usage
### Importing the Library

```typescript
// Loyalty Card
import { LoyaltyCardClient } from "google-wallet";
import { LoyaltyClass, LoyaltyObject } from "google-wallet/lib/cjs/types/retail/loyalty-cards";

//Generic Card
import { GenericClient } from "google-wallet";
import { GenericClass, GenericObject } from "google-wallet/lib/cjs/types/generic/generic";

// Gift Card
import { GiftCardClient } from "google-wallet";
import { GiftCardClass, GiftCardObject } from "google-wallet/lib/cjs/types/retail/gift-cards";

// Offer
import { OfferClient } from "google-wallet";
import { OfferClass, OfferObject } from "google-wallet/lib/cjs/types/retail/offer";

// Boarding Passes
import { ... } from "google-wallet/lib/cjs/types/tickets/boarding-pass";

// Events
import { ... } from "google-wallet/lib/cjs/types/tickets/event";
```

* Boarding Passes and Events typings have been provided without client because I've didn't found any documentation about it's implementation, feel free to implement or share his documentation.

## Configuration
Before using the library, you need to configure your Google application credentials. Make sure you have a valid Google Cloud project and the required credentials in JSON format.

```typescript
const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(
  process.env.GOOGLE_APPLICATION_CREDENTIALS
);
```

## Creating Loyalty Cards
To create or manage loyalty cards using the library, you can follow this example:

```typescript
const loyalty = new LoyaltyCardsClient(GOOGLE_APPLICATION_CREDENTIALS);

// Create a loyalty class
const classPrefix = "fixeloyalty_class";
const classData: LoyaltyClass = {
  // Define the class data
};

let loyaltyClass = await loyalty.getClass(issuerId, classPrefix);
if (!loyaltyClass) {
  loyaltyClass = await loyalty.createClass(classData);
} else {
  loyaltyClass = await loyalty.patchClass(classData);
}

// Create or update a loyalty object
const objectSuffix = "loyalty_object";
const objectData: LoyaltyObject = {
  // Define the object data
};

let loyaltyObject = await loyalty.getObject(issuerId, objectSuffix);
if (!loyaltyObject) {
  loyaltyObject = await loyalty.createObject(objectData);
} else {
  // Update the object data
  loyaltyObject = await loyalty.patchObject(objectData);
}
```

## Generate JWT token and save URL
```typescript
import jwt from "jsonwebtoken";
const token = jwt.sign({
  iss: GOOGLE_APPLICATION_CREDENTIALS.client_email,
  aud: "google",
  origins: ["www.example.com"],
  typ: "savetowallet",
  payload: {
    // The listed classes and objects will be created
    loyaltyClasses: [loyaltyClass],
    loyaltyObjects: [loyaltyObject],
  },
}, GOOGLE_APPLICATION_CREDENTIALS.private_key, {
  algorithm: "RS256",
});
const saveUrl = `https://pay.google.com/gp/v/save/${token}`;
```


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or questions, you can reach out to the project maintainer creating a new issue.