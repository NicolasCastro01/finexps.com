import bcrypt from 'bcryptjs';
import type { HashPasswordProps } from './interfaces';

export const hash = async ({ password, salt }: HashPasswordProps) => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
