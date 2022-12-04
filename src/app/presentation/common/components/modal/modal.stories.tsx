import { ComponentMeta } from '@storybook/react';
import { ButtonTag } from '~/app/presentation/common/components/button';
import { InputTextTag } from '~/app/presentation/common/components/input-text';
import type { ModalProps } from './interfaces';
import ModalTag from './modal';

const defaultParams = {
	title: 'Modal',
	isOpen: true,
	children: (
		<div className='w-full'>
			<InputTextTag
				placeholder='Placeholder'
				onChange={() => {
					return;
				}}
				error={false}
				value=''
			/>
			<div className='flex justify-center mt-4'>
				<ButtonTag
					ariaLabel='Button'
					backgroundTransparent={false}
					onClick={() => {
						return;
					}}
					variant='large'
					label='Button'
				/>
			</div>
		</div>
	)
} as ModalProps;

export default {
	title: 'Common/Modal',
	component: ModalTag
} as ComponentMeta<typeof ModalTag>;

const Template = args => <ModalTag {...args} />;
export const Default = Template.bind({});
Default.args = {
	...defaultParams
};
