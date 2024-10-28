const INT_STATE = { carts: [] };

export const cartred = (state = INT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
       
        const updatedItem = {
          ...state.carts[itemIndex],
          qnty: state.carts[itemIndex].qnty + 1,
        };
        const updatedCarts = [...state.carts];
        updatedCarts[itemIndex] = updatedItem;

        return {
          ...state,
          carts: updatedCarts,
        };
      } else {
        
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    }

    case "DEL_CART": {
      
      const newData = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: newData,
      };
    }

    case "RMV_ONE": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const item = state.carts[itemIndex];

       
        if (item.qnty > 1) {
          const updatedItem = {
            ...item,
            qnty: item.qnty - 1,
          };
          const updatedCarts = [...state.carts];
          updatedCarts[itemIndex] = updatedItem;

          return {
            ...state,
            carts: updatedCarts,
          };
        } else {
         
          const filteredCarts = state.carts.filter(
            (el) => el.id !== action.payload.id
          );

          return {
            ...state,
            carts: filteredCarts,
          };
        }
      }
      return state; 
    }

    default:
      return state;
  }
};
