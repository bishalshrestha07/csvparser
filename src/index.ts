import { parseCsvToJson } from "./csvParser";
import { LatestWineOffers } from "./types/offer";

const csvFilePath = "./files/wine-offers.csv";

const updatedWineOffers: LatestWineOffers = {};

async function parseData() {
  await parseCsvToJson(csvFilePath, updatedWineOffers);
}

parseData();
