export type Account = {
  balance: number;
  bank: string;
  branch: string;
  isActive: boolean;
  name: string;
  number: string;
};

export type SetBalanceParams = {
  amount: number;
  number: string;
};
