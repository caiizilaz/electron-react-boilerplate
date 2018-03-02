// @flow
import React, { Component } from 'react';
import Memo from '../components/Memo';
import * as Model from '../dbmodules/operations/memo'

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;
  constructor() {
    super()
    this.state = {
      memos: null
    }
  }

  componentDidMount = () => {
    Model.read((res) => {
      this.setState({
        memos: res
      })
    })
  }

  render() {
    return (
      <Memo memos={this.state.memos} />
    );
  }
}
