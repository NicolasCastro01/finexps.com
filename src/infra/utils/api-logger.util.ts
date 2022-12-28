import { NextApiRequest } from 'next';

interface LoggerProps {
  params: NextApiRequest;
  description: string;
  category: string;
}

export const apiLogger = ({ params, description, category }: LoggerProps) => {
  console.log({
    params,
    description,
    category
  });
};
