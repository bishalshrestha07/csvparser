import { LatestWineOffers, Offer } from "./types/offer";

export const processOffers = async (
  offer: Offer,
  updatedOffers: LatestWineOffers
): Promise<void> => {
  try {
    if (offer.merchant === "" || offer.merchantID === "" || offer.upd === "") {
      return console.log("invalid input");
    }

    const existingOffer = updatedOffers[offer.merchantID];

    if (!existingOffer || new Date(existingOffer.date) < new Date(offer.upd)) {
      updatedOffers[offer.merchantID] = {
        merchant: offer.merchant,
        merchantId: offer.merchantID,
        date: offer.upd,
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
