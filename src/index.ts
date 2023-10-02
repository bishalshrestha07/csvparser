import { parseCsvToJson } from "./csvParser";
import { LatestWineOffers } from "./types/offer";

const csvFilePath = "./files/wine-offers.csv";
// const csvFilePath = "../offers.csv";

const updatedWineOffers: LatestWineOffers = {};

function parseData() {
  parseCsvToJson(csvFilePath, updatedWineOffers);
}

parseData();
