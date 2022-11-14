import { Button, Row, Input, Text, Column, List } from 'components';
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