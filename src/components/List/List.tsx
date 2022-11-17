import { Column, ListItem } from 'components'
import { ITodo } from 'interfaces'
import React from 'react'

type ListaProps = {
  itens: ITodo[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

export const List: React.FC<ListaProps> = ({ itens, onClick, selectedIndex }) => {
  return (
    <Column py="3px">
      {itens.map((item, index) => <ListItem key={index} {...item} isActive={index === selectedIndex} index={index} onClick={onClick} />)}
    </Column>
  )
}
