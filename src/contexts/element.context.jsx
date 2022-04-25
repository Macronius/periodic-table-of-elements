import { createContext } from 'react';

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}

export const ElementContext = createContext({
  element_fromContext: null,
  setElement_fromContext: () => null,
  val: 40,
});


export const ElementProvider = () => {

    const [val, setVal] = useState(5);
    const [elem, setElem] = useState(initialState);
}