import { IProduct } from "../shared/types";

export const annualCost = (totalGasCosumption: number, product: IProduct) => {
  const { rate, dailystandingcharge, contractlength } = product;
  const annualCost =
    (totalGasCosumption * rate + 365 * dailystandingcharge) *
    (contractlength / 12);
  return annualCost.toFixed(2);
};
