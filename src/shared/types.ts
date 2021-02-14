export interface IProduct {
  id: number;
  supplier: string;
  name: string;
  rate: number;
  dailystandingcharge: number;
  contractlength: number;
  renewable: number;
  status: "live" | "expired";
}
