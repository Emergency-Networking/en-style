import BaseInput from './BaseInput.vue';

export default {
  title: 'Components/Forms/Base Input',
  component: BaseInput,
  tags: ['forms'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'First Name',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter your first name',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
      defaultValue: 'text',
    },
  },
  args: {},
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },
    template: `
      <BaseInput
        v-bind="args"
      />
    `,
  }),
}

export const Primary = {
  args: {},
}