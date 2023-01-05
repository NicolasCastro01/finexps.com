export interface SelectButtonProps {
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: React.ReactNode;
  variant: 'error' | 'success';
  value: string;
}
