const initialState = {
  menu: [],
  loading: true,
  items: JSON.parse(localStorage.getItem('items')), //Получим массив элементов либо пустой массив
  orderPrice: +localStorage.getItem('orderPrice'), //Получим число, либо null, если null, то преобразуется в 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      }
    case 'ITEM_ADD_TO_CART':
      const id = action.payload,
            item = state.menu.find(item => item.id === id);
            
      let newObjA = null,
          newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        count: 1
      };

      const semItemIndex = state.items.findIndex(item => item.id === id);
      if (~semItemIndex) {
        newItem.count += state.items[semItemIndex].count;

        newObjA = {
          ...state,
          items: [
            ...state.items.slice(0, semItemIndex),
            newItem,
            ...state.items.slice(semItemIndex + 1)
          ]
        }
      }
      else {
        newObjA = {
          ...state,
          items: [
            ...state.items, newItem
          ]
        }
      }

      newObjA.orderPrice = newObjA.items.reduce((sum, current) => {
        return current.count * current.price + sum;
      }, 0);

      localStorage.setItem('orderPrice', newObjA.orderPrice);
      localStorage.setItem('items', JSON.stringify(newObjA.items));
      return newObjA;

    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item=> item.id === idx)
      const newObjD = {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }
      
      newObjD.orderPrice = newObjD.items.reduce((sum, current) => {
        return current.count * current.price + sum;
      }, 0);

      localStorage.setItem('orderPrice', newObjD.orderPrice);
      localStorage.setItem('items', JSON.stringify(newObjD.items));
      return newObjD;

    default:
      return state;
  }
} 

export default reducer;