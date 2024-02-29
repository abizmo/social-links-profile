import * as React from 'react'

import { cn } from '@/lib/utils'

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('w-full grid text-center gap-2', className)}
    {...props}
  >
    {React.Children.toArray(children).map((child) => (
      <li>{child}</li>
    ))}
  </ul>
))

List.displayName = 'List'

export { List }
