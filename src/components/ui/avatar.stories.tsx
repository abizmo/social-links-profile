import { type Meta, type StoryObj } from '@storybook/react'
import * as Avatar from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar'
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar.Root>
      <Avatar.Img
        src='https://randomuser.me/api/portraits/women/60.jpg'
        alt='Jane Doe'
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  )
}
