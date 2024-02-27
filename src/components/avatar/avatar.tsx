export default function Avatar({
  className,
  ...props
}: React.HTMLProps<HTMLImageElement>) {
  return <img className='h-20 rounded-full' {...props} />
}
