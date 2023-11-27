/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

const initialState = {
  coffee: {
    id: 1,
    title: 'Latte',
    description: `A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.`,
    image:
      'https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg',
    ingredients: {},
  },
  width: 300,
};

export const BannerContext = createContext<any>({});

export const BannerProvider = ({ children }: any) => {
  const [banner, setBanner] = useState(initialState);
  return <BannerContext.Provider value={{ banner, setBanner }}>{children}</BannerContext.Provider>;
};
