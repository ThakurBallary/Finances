export type Transaction = {
  accountNumber: string;
  amount: number;
  date: string;
  id: string;
  isActive: boolean;
  mode?: string;
  title: string;
};
