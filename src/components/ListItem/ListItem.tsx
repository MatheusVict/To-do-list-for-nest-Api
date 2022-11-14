import { Column, Text } from 'components'
import React from 'react'

export type ListProps = {
  label: string | undefined;
}

export const ListItem: React.FC<ListProps> = ({ label }) => {
return (
      <Column width="100%" bg="rgba(0, 0, 0, 0.2)" p="20px" mb="10px" borderLeft="5px solid #fff" borderRadius="4px">
        <Text>{label}</Text>
      </Column>
    )
}
