import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
  const {name, price, image} = menuItem;

  return (
    <li className="menu__item">
      <div className="menu__title">{name}</div>
      <img className="menu__img" src={`https://murmuring-tor-81614.herokuapp.com${image}`} alt="Cesar salad"></img>
      <div className="menu__price">Price: <span>{price}$</span></div>
      <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
    </li>
  )
}

export default MenuListItem;