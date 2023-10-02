import * as fs from "fs";
import csvtojson from "csvtojson";

import { processOffers } from "./processOffer";

import { Offer, LatestWineOffers } from "./types/offer";
import { writeJsonOffer } from "./writeJson";

export function parseCsvToJson(
  csvFilePath: string,
  updatedWineOffers: LatestWineOffers
) {
  const readStream = fs.createReadStream(csvFilePath);
  const writeStream = fs.createWriteStream("./files/offer.json");
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
        // writeJsonOffer(updatedWineOffers);
        writeStream.write(JSON.stringify(updatedWineOffers, null, 2));
      }
    );
}
