import * as fs from "fs";
import csvtojson from "csvtojson";

import { Offer } from "./types/offer";

export function parseCsvToJson(csvFilePath: string): Promise<Offer[]> {
  return new Promise<Offer[]>((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(csvFilePath);

      const csvParser = csvtojson();

      const jsonData: Offer[] = [];

      readStream.pipe(csvParser).on("data", (jsonChunk) => {
        jsonData.push(JSON.parse(jsonChunk)); // default size of jsonChunk is 16kb
      });

      readStream.on("error", (error) => {
        console.error("Error reading CSV file:", error);

        reject(error);
      });

      csvParser.on("done", () => {
        console.log("CSV parsing complete.");

        resolve(jsonData);
      });
    } catch (error) {
      console.error(error);

      reject(error);
    }
  });
}
