import React, { Component } from 'react'
import { Container, Input, Button, Header, Table, Label } from 'semantic-ui-react'
import * as Model from '../dbmodules/operations/memo'

import styles from './Memo.scss'

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      formValues: {
        text: '',
        editText: '',
        id: 0,
      },
      mode: 'read',
    }
  }
  initState = () => {
    this.setState({
      formValues: {
        text: '',
        editText: '',
        id: 0,
      },
      mode: 'read',
    })
  }
  create = () => {
    Model.create((res) => {
    }, this.state.formValues)
  }
  update = () => {
    Model.update((res) => {
      this.initState()
    }, {
        id: this.state.formValues.id,
        text: this.state.formValues.editText
      })
  }
  delete(id) {
    Model.delete((res) => {

    }, id)
  }
  editMode(memo) {
    this.setState({
      formValues: {
        text: '',
        editText: memo.text,
        id: memo.id
      },
      mode: 'edit',
    })
  }
  onChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formValues = this.state.formValues;
    formValues[name] = value;
    this.setState({ formValues })
  }
  render() {
    const { formValues, mode } = this.state
    const { memos } = this.props
    return (
      <div>
        <Container className={styles.container}>
          <Header as='h2'>MEMO</Header>
          <Input onChange={this.onChange}
            name="text"
            value={formValues.text}
            placeholder="what's can't forget" />
          <Button primary onClick={this.create}>ADD</Button>
        </Container>
        <Container className={styles.container}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>TEXT</Table.HeaderCell>
                <Table.HeaderCell>Operation</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                memos !== null ?
                  memos.map((memo) => {
                    return (
                      mode === 'edit' && formValues.id === memo.id ?
                        <Table.Row key={memo.id}>
                          <Table.Cell>
                            <Input onChange={this.onChange}
                              name="editText"
                              value={formValues.editText || ''}
                              placeholder="text here" />
                          </Table.Cell>
                          <Table.Cell>
                            <Button color='orange' onClick={this.initState}>CANCEL</Button>
                            <Button color='green' onClick={this.update}>SAVE</Button>
                          </Table.Cell>
                        </Table.Row>
                        :
                        <Table.Row key={memo.id}>
                          <Table.Cell>
                            <Label ribbon>{memo.text}</Label>
                          </Table.Cell>
                          <Table.Cell>
                            <Button color='yellow' onClick={this.editMode.bind(this, memo)}>EDIT</Button>
                            <Button color='red' onClick={this.delete.bind(this, memo.id)}>DELETE</Button>
                          </Table.Cell>
                        </Table.Row>
                    )
                  }) : null
              }
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}
