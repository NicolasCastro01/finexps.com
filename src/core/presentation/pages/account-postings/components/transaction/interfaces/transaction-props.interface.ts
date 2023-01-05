export interface TransactionProps {
  type: 'outbound' | 'inbound';
  amount: number;
  category: string;
  date: string;
  description: string;
}
