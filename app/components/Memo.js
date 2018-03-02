import React, { Component } from 'react'
import { Container, Input, Button, Header, Table, Label } from 'semantic-ui-react'
import * as Model from '../dbmodules/operations/memo'

import styles from './Memo.scss'

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      formValues: { text: '' }
    }
  }
  onClick = () => {
    Model.create((res) => {
    }, this.state.formValues)
  }
  onChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formValues = this.state.formValues;
    formValues[name] = value;
    this.setState({ formValues })
  }
  render() {
    const { formValues } = this.state
    return (
      <div>
        <Container className={styles.container}>
          <Header as='h2'>MEMO</Header>
          <Input onChange={this.onChange} name="text" value={formValues.text} placeholder="what's can't forget" />
          <Button primary onClick={this.onClick}>ADD</Button>
        </Container>
        <Container className={styles.container}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>TEXT</Table.HeaderCell>
                <Table.HeaderCell>Operation</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                this.props.memos !== null ?
                  this.props.memos.map((memo) => {
                    return (
                      <Table.Row key={memo.id}>
                        <Table.Cell>
                          <Label ribbon>{memo.text}</Label>
                        </Table.Cell>
                        <Table.Cell>
                          <Button>EDIT</Button>
                          <Button>DELETE</Button>
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
