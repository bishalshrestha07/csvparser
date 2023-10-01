export interface Offer {
  bicode: string;
  boutid: string;
  merchant: string;
  merchantID: string;
  cur: string;
  pri: string;
  qua: string;
  cas: string;
  form: string;
  url: string;
  upd: string;
}

export interface FormatOffer {
  merchantId: string;
  merchant: string;
  date: string;
}

export interface LatestWineOffers {
  [key: string]: FormatOffer;
}
