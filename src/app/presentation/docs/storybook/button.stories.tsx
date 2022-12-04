import { ComponentMeta } from '@storybook/react';
import { ButtonTag } from '~/app/presentation/common/components/button';
import type { ButtonProps } from '~/app/presentation/common/components/button/interfaces';
import { SearchIcon } from '~/app/presentation/common/icons';

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
	component: ButtonTag,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
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
