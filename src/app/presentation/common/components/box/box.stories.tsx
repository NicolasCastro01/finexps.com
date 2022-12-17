import { ComponentMeta } from '@storybook/react';
import { ButtonTag } from '~/app/presentation/common/components/button';
import { InputTextTag } from '~/app/presentation/common/components/input-text';
import BoxComponent from './box';

const defaultProps = {
  title: 'Title',
  children: (
    <div className='mt-8 flex flex-col gap-32px'>
      <div className='flex flex-col gap-16px'>
        <InputTextTag type='text' placeholder='Placeholder' />
        <InputTextTag type='text' placeholder='Placeholder' />
        <InputTextTag type='password' placeholder='Placeholder' />
      </div>
      <div className='flex flex-col justify-center items-center gap-20px'>
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
};

export default {
  title: 'Common/Box',
  component: BoxComponent
} as ComponentMeta<typeof BoxComponent>;

const Template = args => <BoxComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
