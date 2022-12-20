import { ComponentMeta } from '@storybook/react';
import type { PaginationProps } from './interfaces';
import PaginationComponent from './pagination';

const defaultProps = {
  totalPages: 10
} as PaginationProps;

export default {
  title: 'Common/Pagination',
  component: PaginationComponent
} as ComponentMeta<typeof PaginationComponent>;

const Template = args => <PaginationComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
