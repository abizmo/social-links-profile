import { composeStories, type Meta, type StoryObj } from '@storybook/react'
import Card from './card'

import * as LinkStories from '../link/link.stories'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {}
}

export default meta
type Story = StoryObj<typeof Card>

const { Default: Link } = composeStories(LinkStories)

export const Default: Story = {
  args: {
    children: <Link />
  }
}
