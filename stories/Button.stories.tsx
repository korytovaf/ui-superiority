import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 20,
    width: 300,
  }}>
    <Button {...args} >Обычная</Button>
    <Button disabled={true} {...args} >Обычная неактивная</Button>
    <Button transparent={true} {...args} >Прозрачная</Button>
    <Button transparent={true} disabled={true} {...args} >Прозрачная неактивная</Button>
    <Button accent={true} {...args} >Акцентная</Button>
    <Button accent={true} disabled={true} {...args} >Акцентная неактивная</Button>
    <Button accent={true} transparent={true} {...args} >Акцентная прозрачная</Button>
    <Button accent={true} transparent={true} disabled={true} {...args} >Акцентная прозрачная неактивная</Button>
    <Button fs={18} {...args} >Размер шрифта</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Click button!'),
};
