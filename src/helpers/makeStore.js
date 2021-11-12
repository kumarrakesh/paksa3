import * as React from "react";

export function makeStore() {
  // Not using default value for context
  // if we render without Provider, it should throw an error
  const dispatchContext = React.createContext(undefined);
  const storeContext = React.createContext(undefined);

  function StoreProvider({children, initialState, reducer}) {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    // update store when initial state changes
    React.useEffect(() => {
      dispatch({type: "INIT", payload: initialState});
    }, [initialState]);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  }

  function useDispatch() {
    const context = React.useContext(dispatchContext);
    if (context === undefined) {
      throw new Error("useDispatch must be used within a Provider");
    }
    return context;
  }

  function useStore() {
    const context = React.useContext(storeContext);
    if (context === undefined) {
      throw new Error("useStore must be used within a Provider");
    }
    return context;
  }

  return [StoreProvider, useDispatch, useStore];
}
