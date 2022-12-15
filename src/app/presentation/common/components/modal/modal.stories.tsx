import { ComponentMeta } from '@storybook/react';
import { ButtonTag } from '~/app/presentation/common/components/button';
import { InputTextTag } from '~/app/presentation/common/components/input-text';
import type { ModalProps } from './interfaces';
import ModalComponent from './modal';

const defaultProps = {
  title: 'Modal',
  isOpen: true,
  children: (
    <div className='w-full-percent'>
      <InputTextTag
        type='text'
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
  component: ModalComponent
} as ComponentMeta<typeof ModalComponent>;

const Template = args => <ModalComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
