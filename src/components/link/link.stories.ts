import type { Meta, StoryObj } from '@storybook/react'

import Link from './link'

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  parameters: {}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: 'https://www.github.com',
    children: 'GitHub'
  }
}
