import * as fs from "fs";
import csvtojson from "csvtojson";

import { processOffers } from "./processOffer";

import { Offer, LatestWineOffers } from "./types/offer";

export function parseCsvToJson(
  csvFilePath: string,
  updatedWineOffers: LatestWineOffers
) {
  const readStream = fs.createReadStream(csvFilePath);
  csvtojson()
    .fromStream(readStream)
    .subscribe(
      (offer) => {
        // console.log(offer);
        processOffers(offer, updatedWineOffers);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(updatedWineOffers);
      }
    );
}
