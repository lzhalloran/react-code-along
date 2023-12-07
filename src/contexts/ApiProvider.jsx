// Data we want to store in this context provider:
// https://pokeapi.co/api/v2/

import { createContext, useState } from "react";

export const ApiContext = createContext(process.env.REACT_APP_API_URL);

export function ApiProvider(props) {
  let [url, setUrl] = useState(process.env.REACT_APP_API_URL);

  return (
    <ApiContext.Provider value={{url, setUrl}}>
      {props.children}
    </ApiContext.Provider>
  );
}
