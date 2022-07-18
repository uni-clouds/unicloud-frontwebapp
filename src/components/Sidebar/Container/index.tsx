type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <>{children}</>
}
