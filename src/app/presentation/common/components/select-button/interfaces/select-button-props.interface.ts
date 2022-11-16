export interface SelectButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  variant?: 'error' | 'success';
}
