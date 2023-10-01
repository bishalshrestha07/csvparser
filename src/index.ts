import { parseCsvToJson } from "./csvParser";

const csvFilePath = "./files/wine-offers.csv";

async function parseData(csvFilePath: string) {
  const parsedData = await parseCsvToJson(csvFilePath);
  console.log(parsedData);
}

parseData(csvFilePath);
