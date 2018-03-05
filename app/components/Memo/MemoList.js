import React from 'react'
import { Container, Input, Button, Table, Label } from 'semantic-ui-react'
import styles from './Memo.scss'

const MemoList = ({ onChange, memoList, editMode, isEdit, formValues, initState, deleteBtn, editBtn }) => {
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
                                    isEdit && formValues.id === memo.id ?
                                        <Table.Row key={memo.id}>
                                            <Table.Cell>
                                                <Input onChange={onChange}
                                                    name="editText"
                                                    value={formValues.editText || ''}
                                                    placeholder="text here" />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button onClick={initState} color='orange'>CANCEL</Button>
                                                <Button onClick={editBtn} color='green'>SAVE</Button>
                                            </Table.Cell>
                                        </Table.Row>
                                        :
                                        <Table.Row key={memo.id}>
                                            <Table.Cell>
                                                <Label ribbon>{memo.text}</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button color='yellow' onClick={editMode.bind(null, memo)}>EDIT</Button>
                                                <Button color='red' onClick={deleteBtn.bind(null, memo.id)}>DELETE</Button>
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

export default MemoList