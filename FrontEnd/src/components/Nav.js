import React, { Component } from 'react'
import {  Menu, Icon } from 'semantic-ui-react'


export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
          <Menu inverted icon fixed='bottom'  borderless widths={4}
            style= {{
              height: '8vh',
            }}
          >
          <Menu.Item
            name='home icon'
            active={activeItem === 'home icon'}
            onClick={this.handleItemClick}
          >
            <Icon name='home' />
          </Menu.Item>
          <Menu.Item
            name='favorite icon'
            active={activeItem === 'favorite icon'}
            onClick={this.handleItemClick}
          >
            <Icon name='favorite' />
          </Menu.Item>
          <Menu.Item
            name='search icon'
            active={activeItem === 'search icon'}
            onClick={this.handleItemClick}
          >
            <Icon name='search' />
          </Menu.Item>
          <Menu.Item
            name='user profile icon'
            active={activeItem === 'user profile icon'}
            onClick={this.handleItemClick}
          >
            <Icon name='user' />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}