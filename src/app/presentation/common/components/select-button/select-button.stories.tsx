import { ComponentMeta } from '@storybook/react';
import { ArrowUpCircleIcon } from '~/app/presentation/common/icons';
import type { SelectButtonProps } from './interfaces';
import SelectButtonTag from './select-button';

const defaultParams = {
	selected: true,
	onClick: () => {
		return;
	},
	label: 'Label',
	icon: <ArrowUpCircleIcon />,
	variant: 'success'
} as SelectButtonProps;

export default {
	title: 'Common/SelectButton',
	component: SelectButtonTag
} as ComponentMeta<typeof SelectButtonTag>;

const Template = args => <SelectButtonTag {...args} />;
export const Error = Template.bind({});
Error.args = {
	...defaultParams,
	label: 'Error',
	variant: 'error'
};

export const Success = Template.bind({});
Success.args = {
	...defaultParams,
	label: 'Success',
	variant: 'success'
};
