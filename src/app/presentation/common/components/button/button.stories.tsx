import { ComponentMeta } from '@storybook/react';
import { SearchIcon } from '~/app/presentation/common/icons';
import ButtonComponent from './button';
import type { ButtonProps } from './interfaces';

const defaultProps = {
	ariaLabel: 'Button',
	backgroundTransparent: false,
	onClick: () => {
		return;
	},
	variant: 'large',
	label: 'Button'
} as ButtonProps;

export default {
	title: 'Common/Button',
	component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>;

const Template = args => <ButtonComponent {...args} />;

export const Large = Template.bind({});
Large.args = {
	...defaultProps,
	variant: 'large',
	label: 'Button',
	icon: null
};

export const Medium = Template.bind({});
Medium.args = {
	...defaultProps,
	variant: 'medium',
	label: 'Button',
	icon: null
};

export const Small = Template.bind({});
Small.args = {
	...defaultProps,
	variant: 'small',
	label: null,
	icon: <SearchIcon />
};
