import React from 'react'
import { Container, Input, Button, Header } from 'semantic-ui-react'
import styles from './Memo.scss'

const MemoAdd = ({ onChange, formValues, create }) => {
  return (
    <Container className={styles.container}>
      <Header as='h2'>MEMO</Header>
      <Input onChange={onChange}
        name="text"
        value={formValues.text}
        placeholder="what's can't forget" />
      <Button primary onClick={create}>ADD</Button>
    </Container>
  )
}

export default MemoAdd