import { Input } from 'components/Input/Input';
import { Text } from 'components/Text/Text';
import React from 'react'

const Home = () => {
  return (
    <>
      <Text fontWeight="bold">Tasks</Text>
      <Input placeholder='Enter a new Task'/>
    </>
  )
}

export default Home;