import { ComponentMeta } from '@storybook/react';
import InputTextTag from './input-text';
import type { InputTextProps } from './interfaces';

const defaultParams = {
	placeholder: 'Placeholder',
	onChange: () => {
		return;
	},
	error: false,
	value: ''
} as InputTextProps;

export default {
	title: 'Common/InputText',
	component: InputTextTag
} as ComponentMeta<typeof InputTextTag>;

const Template = args => <InputTextTag {...args} />;

export const Default = Template.bind({});
Default.args = {
	...defaultParams
};
