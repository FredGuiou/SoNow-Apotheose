import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'
import profile from '../images/profile.jpg'

export default class MenuExampleSecondaryPointing extends Component {

  render() {
    return (
      <div>
        <Header as='h2' attached='top' background-color='black' dividing>
          <Image circular src={profile}/> User SoNow
          <Header.Subheader as='h2' align='center'>lol</Header.Subheader>
        </Header>
      </div>
    )
  }
}
