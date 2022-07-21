import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class EventCardInformations extends Component {
  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
          <Button
            style={{ backgroundColor: '#F30067' }}
            circular
            content='Want to see more ?'
            disabled={open}
            positive
            onClick={this.handleOpen}
          />
    )
  }
}