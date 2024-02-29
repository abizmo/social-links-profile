import { composeStories, type Meta, type StoryObj } from '@storybook/react'

import { List } from './list'
import * as ButtonStories from './button.stories'

const meta: Meta<typeof List> = {
  title: 'UI/List'
}

export default meta
type Story = StoryObj<typeof List>

const { Default: Button } = composeStories(ButtonStories)

export const Default: Story = {
  render: () => {
    return (
      <List>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </List>
    )
  }
}
