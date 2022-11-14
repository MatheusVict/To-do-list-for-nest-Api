import { Button, Row, Input, Text, Column, List, Logo } from 'components';
import React, { useState } from 'react'

const Home = () => {
  const [taskName, setTaksName] = useState('');
  const [task, setTask] = useState<{ label: string | undefined}[]>([]);

  const handleSubmit = () => {
    if (!taskName) return;
    
    setTask(previous => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    })
    setTaksName('');
  };

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" alignItems="center" py="25px">
        <Logo />
      </Column>
      <Column width="100%" height="300px" bg="rgba(255, 255, 255, 0.2)" borderRadius="4px">
      <Button variant='primary'>
        <Text fontSize='bodyExtraLarge' fontFamily='secundary' fontWeight='bold' color='primary'>Start</Text>
      </Button>
      </Column>
      <Text my="10px" fontSize="bodyLarge" paddingLeft="2px" fontWeight="bold">Tasks</Text>
      <Row width="100%">
        <Input flex={1} placeholder='Enter a new Task' value={taskName} onChange={(e: any) => setTaksName(e.target.value)}/>
        <Button onClick={handleSubmit}>ok</Button>
      </Row>
      <List itens={task} />
    </Column>
  )
}

export default Home;