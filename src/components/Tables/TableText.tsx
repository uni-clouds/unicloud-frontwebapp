interface TableTextProps {
  children: string
}

export function TableText(props: TableTextProps) {
  return <span className='text-xs lg:text-sm'>{props.children}</span>
}
