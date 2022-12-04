import { ComponentMeta } from '@storybook/react';
import { SearchIcon } from '~/app/presentation/common/icons';
import ButtonTag from './button';
import type { ButtonProps } from './interfaces';

const defaultParams = {
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
	component: ButtonTag
} as ComponentMeta<typeof ButtonTag>;

const Template = args => <ButtonTag {...args} />;

export const Large = Template.bind({});
Large.args = {
	...defaultParams,
	variant: 'large',
	label: 'Button',
	icon: null
};

export const Medium = Template.bind({});
Medium.args = {
	...defaultParams,
	variant: 'medium',
	label: 'Button',
	icon: null
};

export const Small = Template.bind({});
Small.args = {
	...defaultParams,
	variant: 'small',
	label: null,
	icon: <SearchIcon />
};
