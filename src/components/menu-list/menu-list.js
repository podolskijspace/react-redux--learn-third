import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import {addedToCart} from '../../actions';

import './menu-list.scss';

class MenuList extends Component {
  render() {
    const {menuItems, addedToCart} = this.props;

    return (
      <ul className="menu__list">
        {
          menuItems.map(menuItem => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addedToCart(menuItem.id)}/>;
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
  }
}

const mapDispatchToProps = {
  addedToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);