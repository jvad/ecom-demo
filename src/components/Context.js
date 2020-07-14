import React, { useState, createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { useSnackbar } from "notistack";
import data from "../data/data.json";

const initialState = {
  itemsInCart: [],
};

export const Context = createContext();
export const ShoeListProvider = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [state, dispatch] = useReducer(Reducer, initialState);
  function addItem(item) {
    dispatch({
      type: "ADD",
      payload: item,
    });
  }

  const snackBarAdd = (variant) => {
    enqueueSnackbar("Added to cart", { variant });
  };

  const snackBarRemoved = (variant) => {
    enqueueSnackbar("Removed from cart", { variant });
  };
  function emptyCart() {
    dispatch({
      type: "Empty",
    });
  }
  function removeItem(id) {
    dispatch({
      type: "Remove",
      payload: id,
    });
  }

  const [list, setList] = useState(data);

  //   setList("");

  return (
    <>
      <Context.Provider
        value={{
          list,
          setList,
          emptyCart,
          itemsInCart: state.itemsInCart,
          removeItem,
          snackBarRemoved,
          snackBarAdd,
          addItem,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};
