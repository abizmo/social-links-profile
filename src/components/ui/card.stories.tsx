import { composeStories, type Meta, type StoryObj } from '@storybook/react'
import * as Card from './card'

const meta: Meta<typeof Card> = {
  title: 'UI/Card'
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => {
    return <Card.Card>Hola</Card.Card>
  }
}
