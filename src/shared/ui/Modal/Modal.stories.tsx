import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequuntur debitis, deleniti provident facere, pariatur perferendis maxime et amet quis magni, ipsa velit iste dolorem laudantium? Laudantium natus deleniti cum!',
};
export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequuntur debitis, deleniti provident facere, pariatur perferendis maxime et amet quis magni, ipsa velit iste dolorem laudantium? Laudantium natus deleniti cum!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
