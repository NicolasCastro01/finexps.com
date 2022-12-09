import { ComponentMeta } from '@storybook/react';
import type { PaginationProps } from './interfaces';
import PaginationTag from './pagination';

const defaultParams = {
	totalPages: 10
} as PaginationProps;

export default {
	title: 'Common/Pagination',
	component: PaginationTag
} as ComponentMeta<typeof PaginationTag>;

const Template = args => <PaginationTag {...args} />;
export const Default = Template.bind({});
Default.args = {
	...defaultParams
};
