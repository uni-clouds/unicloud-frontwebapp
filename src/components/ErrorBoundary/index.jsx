import React from 'react'
import Error from '../../pages/Error'

export default class MyBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  static getDerivedStateFromError(data) {
    return { error: true }
  }

  componentDidCatch(error, data) {
    console.error('error:', error, 'data:', data)
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) return <Error />

    return children
  }
}
