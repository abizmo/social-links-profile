import { type Meta, type StoryObj } from '@storybook/react'
import Avatar from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {}
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    alt: 'Jane Doe'
  }
}
