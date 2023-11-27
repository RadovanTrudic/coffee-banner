/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

const initialState = {
  coffee: {
    id: 0,
    title: '',
    description: '',
    image: '',
    ingredients: {},
  },
  width: 700.5,
};

export const BannerContext = createContext<any>({});

export const BannerProvider = ({ children }: any) => {
  const [banner, setBanner] = useState(initialState);
  return <BannerContext.Provider value={{ banner, setBanner }}>{children}</BannerContext.Provider>;
};
