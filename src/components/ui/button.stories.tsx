import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button'
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button>
      <a href='#'>GitHub</a>
    </Button>
  )
}
