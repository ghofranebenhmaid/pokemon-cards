import React from 'react';
import { ReactComponent as Height } from '../../assets/SVG/height-icon.svg';
import { ReactComponent as Weight } from '../../assets/SVG/weight-icon.svg';

const Card = (props) => {
  const { image, name, height, weight, abilities } = props;
  return (
    <div className='card'>
      <figure className='card__img'>
        <img src={image} alt={name} />
      </figure>
      <div className='card__info'>
        <div className='card__info--name'>
          <h2>{name}</h2>
        </div>
        <div className='card__info--widthHeight'>
          <span>
            <Height />
            <p>{`${height}` / 10} m</p>
          </span>
            <hr />
          <span>
            <Weight />
            <p>{`${weight}` / 10} kg</p>
          </span>
        </div>
        <div className='card__info--abilities'>{abilities}</div>
      </div>
    </div>
  );
};

export default Card;
