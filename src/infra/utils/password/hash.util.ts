import bcrypt from 'bcryptjs';

interface HashPasswordProps {
  password: string;
  salt: number;
}

export const hash = async ({ password, salt }: HashPasswordProps) => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
