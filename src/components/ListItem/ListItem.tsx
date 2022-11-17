import { Column, Text } from 'components'
import React from 'react'

export type ListProps = {
  index: number;
  id: number;
  task: string;
  isDone: number;
  onClick: (index: number) => void
}

export const ListItem: React.FC<ListProps> = ({ index, id, isDone, task , onClick}) => {
return (
      <Column width="100%" bg="rgba(0, 0, 0, 0.2)" p="20px" mb="10px" borderLeft="5px solid #fff" onClick={() => onClick(id)} cursor="pointer" borderRadius="4px">
        <Text>{task}</Text>
      </Column>
    )
}
