// Data we want to store in this context provider:
// https://pokeapi.co/api/v2/

import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(process.env.REACT_APP_API_URL);

export function ApiProvider(props) {
  let [url, setUrl] = useState(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <ApiContext.Provider value={{ url, setUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
}
