import { ComponentMeta } from '@storybook/react';
import InputTextComponent from './input-text';
import type { InputTextProps } from './interfaces';

const defaultProps = {
	placeholder: 'Placeholder',
	onChange: () => {
		return;
	},
	error: false,
	value: ''
} as InputTextProps;

export default {
	title: 'Common/InputText',
	component: InputTextComponent
} as ComponentMeta<typeof InputTextComponent>;

const Template = args => <InputTextComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
	...defaultProps
};
