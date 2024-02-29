import { composeStories, type Meta, type StoryObj } from '@storybook/react'

import * as Card from './card'
import * as AvatarStories from './avatar.stories'
import * as ListStories from './list.stories'

const meta: Meta<typeof Card> = {
  title: 'UI/Card'
}

export default meta
type Story = StoryObj<typeof Card>

const { Default: Avatar } = composeStories(AvatarStories)
const { Default: List } = composeStories(ListStories)

export const Default: Story = {
  render: () => {
    return (
      <Card.Card>
        <Card.CardHeader>
          <div className='grid gap-6 text-center justify-items-center'>
            <Avatar />
            <div>
              <Card.CardTitle>Jessica Randall</Card.CardTitle>
              <Card.CardHighlight>London, United Kingdom</Card.CardHighlight>
            </div>
            <Card.CardDescription>
              "Front-end developer and avid reader."
            </Card.CardDescription>
          </div>
        </Card.CardHeader>
        <Card.CardFooter>
          <List />
        </Card.CardFooter>
      </Card.Card>
    )
  }
}
