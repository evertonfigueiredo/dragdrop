import React, { useRef, useContext, useState } from 'react';
import { useDrag, useDrop } from "react-dnd";

import BoardContext from '../Board/context'

import { Container, Label, Info } from './styles';
import user from '../../assets/img/user.png'
import ModalUser from "../Modal";

function Card({ data, index, listIndex, drag }) {

  const ref = useRef()
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: data.id, index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {

      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      // Index dos elementos que estão sendo arrastados e que estão sendo sobrepostos.
      const draggedIndex = item.index;
      const targetIndex = index;

      // Tamanho do card sobreposto
      const targetSize = ref.current.getBoundingClientRect();
      // Calculando o ponto central de cada card
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      // Distancia a ser arrastada
      const draggedOffset = monitor.getClientOffset();
      // Distancia percorrida dentro do item arrastado.
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;

    }
  });



  dragRef(dropRef(ref))

  return <Container ref={ref} isDragging={isDragging}>
    <header>
      {data.labels?.map(label => <Label key={label} color={label} />)}
    </header>
    <p>
      {data.content}
    </p>
    <Info>
      <img src={data.user ? data.user : user} />
      <ModalUser data={data}/>
    </Info>
  </Container> 
}

export default Card;