export default function Card({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <article
      className='w-full p-6 rounded-lg bg-neutral-800 max-w-96'
      {...props}
    >
      {children}
    </article>
  )
}
