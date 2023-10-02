import * as fs from "fs";
import { LatestWineOffers } from "./types/offer";

const filePath = "./files/offers.json";
export async function writeJsonOffer(updatedOffers: LatestWineOffers) {
  try {
    const outputOffer = Object.values(updatedOffers);
    await fs.promises.writeFile(filePath, JSON.stringify(outputOffer, null, 2));

    console.log("json file written to ", filePath);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
