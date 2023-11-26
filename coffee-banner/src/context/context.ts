import { createContext } from 'react';

const initialValue = {
    coffeeType: "",
    width: 300,
    title: "",
    description: ""
}

const Context = createContext(initialValue);

export default Context;