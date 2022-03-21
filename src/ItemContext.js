import React, { createContext, useState } from 'react';

const ItemContext = createContext({
  items: {},
  setItems: () => {},
});

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState({});
  const value = { items, setItems };
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };
export default ItemContext;
