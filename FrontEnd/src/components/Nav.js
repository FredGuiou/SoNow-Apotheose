import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Menu, Icon } from 'semantic-ui-react';


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
              width: '100vw'
            }}
          >
          <Menu.Item
            name='home icon'
            active={activeItem === 'home icon'}
            onClick={this.handleItemClick}
          >
          <Link to='/feed'>
            <Icon name='home' />
          </Link>
          </Menu.Item>
          <Menu.Item
            name='favorite icon'
            active={activeItem === 'favorite icon'}
            onClick={this.handleItemClick}
          >
          <Link to='/favoris'>
            <Icon name='favorite' />
          </Link>
          </Menu.Item>
          <Menu.Item
            name='search icon'
            active={activeItem === 'search icon'}
            onClick={this.handleItemClick}
          >
          <Link to='/autour-de-moi'>
            <Icon name='search' />
          </Link>
          </Menu.Item>
          <Menu.Item
            name='user profile icon'
            active={activeItem === 'user profile icon'}
            onClick={this.handleItemClick}
          >
          <Link to='/mon-compte'>
            <Icon name='user' />
          </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}