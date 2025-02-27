import { fn } from '@storybook/test';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Elements/Buttons/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'wide'] },
    type: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'text'] },
    color: { control: { type: 'select' }, options: ['blue', 'red'] },
    backgroundColor: { control: 'color' },
  },
  parameters: {
    variant: {
      default: 'primary',
    },
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'Light',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { backgroundColor: '', onClick: fn() },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
        <Button v-bind="args" @click="onClick" />
    `,
  }),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    type: 'primary',
  },
};

// export const Secondary = {
//   parameters: {
//     backgrounds: { default: 'Dark' },
//   },
//   args: {
//     type: 'secondary',
//     label: 'Button',
//   }
// };
//
// export const Inline = {
//   args: {
//     variant: 'text',
//     label: 'Button',
//     href: 'https://example.com',
//   }
// };
//
// export const Wide = {
//   args: {
//     size: 'wide',
//     label: 'Button',
//   },
// };
