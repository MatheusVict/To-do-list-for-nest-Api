import { Column, ListItem } from 'components'
import { ITodo } from 'interfaces'
import React from 'react'

type ListaProps = {
  itens: ITodo[];
  onClick: (index: number) => void;
}

export const List: React.FC<ListaProps> = ({ itens, onClick }) => {
  return (
    <Column py="3px">
      {itens.map((item, index) => <ListItem key={index} {...item} index={index} onClick={onClick} />)}
    </Column>
  )
}
