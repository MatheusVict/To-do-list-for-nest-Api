import { Column, Text, Row, Icon } from 'components'
import React from 'react'

export type ListProps = {
  index: number;
  id: number;
  task: string;
  isDone: number;
  onClick: (index: number) => void;
  isActive: boolean;
}

export const ListItem: React.FC<ListProps> = ({ index, id, isDone, task , onClick, isActive}) => {
return (
      <Column width="100%" 
      bg="rgba(0, 0, 0, 0.2)" 
      p="20px" mb="10px" 
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor={isActive ? '#fff' : 'transparent'}
      onClick={() => onClick(index)} 
      cursor="pointer" borderRadius="4px">
      <Row>
      <Text flex={1} >{task}</Text>
      {isDone === 1 && <Icon variant='done-white'/>}
      </Row>
      </Column>
    )
}
