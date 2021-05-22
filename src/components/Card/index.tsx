import React from 'react';
import { BiFemaleSign } from 'react-icons/bi';
import { GiMale } from 'react-icons/gi';
import { useModal } from '../../hooks/ModalContext';
import { Animal } from '../../hooks/types/modal';

import { Container } from './styles';

interface CardProps {
  photo?: string
  name: string;
  age: number;
  gender: 'f' | 'm';
  animal: Animal;
}

const Card: React.FC<CardProps> = ({
  gender,
  age,
  name,
  photo,
  animal
}) => {
  const {handleClickAppendAnimal} = useModal()

  return (
    <button 
      onClick={() => handleClickAppendAnimal(animal)} 
      style={{backgroundColor: 'transparent', border: 0}}
    >  
      <Container>
        <img 
          src={photo} 
          alt="Profile dog"
        />
        <span>{name}</span>

        <div className="contentCard">
          <div className="year" style={{
            backgroundColor: gender === 'm' 
            ? '#1C88D6' 
            : '#D20637' 
          }}>
            {age > 1 ? `${age} anos` : `${age} ano`} 
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 7, right: 11}}>
        {gender === 'f' ? (
            <BiFemaleSign color="#BB506A" size={25} />
          ) : (
            <GiMale color="#1C88D6" size={25} />
          )}
        </div>
      </Container>
    </button>
  );
}

export default Card;