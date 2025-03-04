import { fn } from '@storybook/test';

import useButtonStyles from '../components/buttons/use-button-styles';
import MyButton from '@/components/buttons/en-button.vue';

const { VARIANTS, INTENTS, ATTRIBUTES } = useButtonStyles();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Elements/EN Button',
    component: MyButton,
    argTypes: {
        variant: { control: { type: 'select' }, options: Object.values(VARIANTS) },
        intent: { control: { type: 'select' }, options: Object.values(INTENTS) },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary',
        intent: 'neutral',
    },
};
export const Danger = {
    args: {
        label: 'Button',
        intent: 'delete',
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
