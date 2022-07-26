import React from 'react';

import { Container } from './styles';
import Card from '../Card'
import { MdAdd } from 'react-icons/md'

function List({ data, index: listIndex }) {
  return <Container done={data.done}>
    <header>
      <h2>{data.title}</h2>
      {data.creatable && (
        <button type='button'>
          <MdAdd size={24} color="#fff" />
        </button>
      )}
    </header>
    <ul>
      {data.cards.map(
        (card, index) =>
          <Card
            drag={true}
            key={card.id}
            data={card}
            index={index}
            listIndex={listIndex}
          />
      )
      }
    </ul>
  </Container >;
}

export default List;