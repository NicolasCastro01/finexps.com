import { ComponentMeta } from '@storybook/react';
import type { SkeletonProps } from './interfaces';
import SkeletonComponent from './skeleton';
const defaultProps = {
  height: 'small'
} as SkeletonProps;

export default {
  title: 'Common/Skeleton',
  component: SkeletonComponent
} as ComponentMeta<typeof SkeletonComponent>;

const Template = args => (
  <div className='w-half-percent'>
    <div className='mt-1 w-half-percent'>
      <SkeletonComponent {...args} />
    </div>
    <div className='mt-1 w-half-percent'>
      <SkeletonComponent {...args} />
    </div>
    <div className='mt-1'>
      <SkeletonComponent {...args} />
    </div>
  </div>
);
export const Small = Template.bind({});
Small.args = {
  ...defaultProps,
  height: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultProps,
  height: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  height: 'large'
};
