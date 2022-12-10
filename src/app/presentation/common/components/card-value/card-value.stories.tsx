import { ComponentMeta } from '@storybook/react';
import { ArrowUpCircleIcon } from '~/app/presentation/common/icons';
import CardValueComponent from './card-value';
import type { CardValuesProps } from './interfaces';

const defaultProps = {
	title: 'Card Value',
	info: 'Info',
	icon: <ArrowUpCircleIcon />,
	iconColor: 'green',
	value: 100,
	backgroundColor: 'gray'
} as CardValuesProps;

export default {
	title: 'Common/CardValue',
	component: CardValueComponent
} as ComponentMeta<typeof CardValueComponent>;

const Template = args => <CardValueComponent {...args} />;

export const Gray = Template.bind({});
Gray.args = {
	...defaultProps,
	backgroundColor: 'gray'
};

export const Green = Template.bind({});
Green.args = {
	...defaultProps,
	backgroundColor: 'green'
};
