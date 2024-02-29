import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHighlight,
  CardTitle
} from './components/ui/card'
import { List } from './components/ui/list'

function App() {
  return (
    <main className='grid min-h-screen'>
      <div className='flex items-center justify-center px-6'>
        <Card>
          <CardHeader>
            <div className='grid gap-6 text-center justify-items-center'>
              <Avatar>
                <AvatarImage
                  src='https://randomuser.me/api/portraits/women/60.jpg'
                  alt='Jane Doe'
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Jessica Randall</CardTitle>
                <CardHighlight>London, United Kingdom</CardHighlight>
              </div>
              <CardDescription>
                "Front-end developer and avid reader."
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <List>
              <Button asChild>
                <a href='#'>GitHub</a>
              </Button>
              <Button asChild>
                <a href='#'>Frontend Mentor</a>
              </Button>
              <Button asChild>
                <a href='#'>LinkedIn</a>
              </Button>
              <Button asChild>
                <a href='#'>Twitter</a>
              </Button>
              <Button asChild>
                <a href='#'>Instagram</a>
              </Button>
            </List>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default App
