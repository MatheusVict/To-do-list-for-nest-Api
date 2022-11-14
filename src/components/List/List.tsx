import { Column, ListItem, ListProps } from 'components'
import React from 'react'

type ListaProps = {
  itens: ListProps[]
}

export const List: React.FC<ListaProps> = ({ itens }) => {
  return (
    <Column py="3px">
      {itens.map((item, index) => <ListItem key={index} {...item}/>)}
    </Column>
  )
}
