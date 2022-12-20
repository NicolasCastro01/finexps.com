export interface ButtonProps {
  label?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  backgroundTransparent: boolean;
  variant: 'small' | 'medium' | 'large';
  ariaLabel: string;
}
