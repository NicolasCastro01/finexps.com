import { ComponentMeta } from '@storybook/react';
import { ArrowUpCircleIcon } from '~/core/presentation/common/icons';
import type { SelectButtonProps } from './interfaces';
import SelectButtonComponent from './select-button';

const defaultProps = {
  selected: true,
  onClick: () => {
    return;
  },
  label: 'Label',
  icon: <ArrowUpCircleIcon />,
  variant: 'success',
  value: 'value'
} as SelectButtonProps;

export default {
  title: 'Common/SelectButton',
  component: SelectButtonComponent
} as ComponentMeta<typeof SelectButtonComponent>;

const Template = args => <SelectButtonComponent {...args} />;
export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  label: 'Error',
  variant: 'error'
};

export const Success = Template.bind({});
Success.args = {
  ...defaultProps,
  label: 'Success',
  variant: 'success'
};
