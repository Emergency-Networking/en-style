import { fn } from '@storybook/test';

import MyButton from '@/components/buttons/en-button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Elements/EN Button',
  component: MyButton,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['save', 'delete', 'new', 'edit', 'continue', 'cancel', 'utility', 'default'] },
    level: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    variant: 'save',
  },
};
export const Danger = {
  args: {
    label: 'Button',
    variant: 'delete',
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };
//
// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };
//
// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
