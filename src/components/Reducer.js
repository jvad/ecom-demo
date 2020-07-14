// import { Context } from "./Context";
// import { useContext } from "react";
// export const {}
// const { list } = useContext(Context);
export default (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,

        itemsInCart: [action.payload, ...state.itemsInCart],
      };
    case "Remove":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Empty": {
      return {
        itemsInCart: [],
      };
    }
    //
    default:
      return state;
  }
};
