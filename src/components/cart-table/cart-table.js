import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import {addedToCart, deleteFromCart} from '../../actions'

const CartTable = ({items, deleteFromCart, addedToCart}) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          items.map(item => {
            const {name, price, image, id, count} = item;

            return (
              <div key={id} className="cart__item">
                <img src={`https://murmuring-tor-81614.herokuapp.com${image}`} className="cart__item-img" alt={name}/>
                <div className="cart__item-title">{name}</div>
                <div className="cart__item-price">
                  {price}$
                </div>
                <div className="cart__item-count">
                  <button className={'cart__item-change'} onClick={() => deleteFromCart(id)} > less</button>
                    {count}
                  <button className={'cart__item-change'} onClick={() => addedToCart(id)}> more</button>
                </div>
                <div onClick={() => deleteFromCart(id, 'all')} className="cart__close">&times;</div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  deleteFromCart,
  addedToCart,
}

export default connect (mapStateToProps, mapDispatchToProps)(CartTable);