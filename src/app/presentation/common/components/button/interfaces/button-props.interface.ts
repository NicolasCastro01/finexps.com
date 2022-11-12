export interface ButtonProps {
  label?: string;
  onClick: () => void;
  icon?: string;
  disabled?: boolean;
  backgroundTransparent: boolean;
  variant: 'small' | 'medium' | 'large';
}
