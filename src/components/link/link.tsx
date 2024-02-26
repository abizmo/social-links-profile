export default function Link({
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className='inline-grid w-full h-10 px-4 text-xs font-semibold leading-none rounded-lg place-content-center max-w-80 bg-neutral-700 text-neutral-100 hover:bg-lime-400 hover:text-neutral-800'
      {...props}
    >
      {children}
    </a>
  )
}
