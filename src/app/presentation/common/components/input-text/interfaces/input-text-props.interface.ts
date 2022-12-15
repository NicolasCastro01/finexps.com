import type { ChangeEvent } from 'react';

export interface InputTextProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password';
  error?: boolean;
  value?: string;
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
}
