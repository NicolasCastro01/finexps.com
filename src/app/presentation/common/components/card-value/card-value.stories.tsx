import { ComponentMeta } from '@storybook/react';
import { ArrowUpCircleIcon } from '~/app/presentation/common/icons';
import CardValueTag from './card-value';
import type { CardValuesProps } from './interfaces';

const defaultParams = {
	title: 'Card Value',
	info: 'Info',
	icon: <ArrowUpCircleIcon />,
	iconColor: 'green',
	value: 100,
	backgroundColor: 'gray'
} as CardValuesProps;

export default {
	title: 'Common/CardValue',
	component: CardValueTag
} as ComponentMeta<typeof CardValueTag>;

const Template = args => <CardValueTag {...args} />;

export const Gray = Template.bind({});
Gray.args = {
	...defaultParams,
	backgroundColor: 'gray'
};

export const Green = Template.bind({});
Green.args = {
	...defaultParams,
	backgroundColor: 'green'
};
