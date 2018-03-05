import React, { Component } from 'react'
import { Container, Input, Button, Table, Label } from 'semantic-ui-react'
import styles from './Memo.scss'

class MemoList extends Component {
    render() {
        const { memoList } = this.props
        return (
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
                            memoList !== null ?
                                memoList.map((memo) => {
                                    return (
                                        <Table.Row key={memo.id}>
                                            <Table.Cell>
                                                <Label ribbon>{memo.text}</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }) : null
                        }
                    </Table.Body>
                </Table>
            </Container>
        )
    }
}

export default MemoList