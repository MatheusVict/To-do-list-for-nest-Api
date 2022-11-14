import { Button, Row, Input, Text, Column } from 'components';
import React from 'react'

const Home = () => {
  return (
    <Column width="600px" margin="0 auto">
      <Text my="10px" fontSize="bodyLarge" paddingLeft="2px" fontWeight="bold">Tasks</Text>
      <Row width="100%">
        <Input flex={1} placeholder='Enter a new Task'/>
        <Button>ok</Button>
      </Row>
    </Column>
  )
}

export default Home;